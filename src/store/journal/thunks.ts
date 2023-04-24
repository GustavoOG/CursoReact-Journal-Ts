import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { noteClass } from "../../interface/noteClass"
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";
import { AppDispatch, store } from "../store";
import { deleteNoteById } from "./journalSlice";

export const startNewNote = (): any => {

    return async (dispatch: AppDispatch, getState: typeof store.getState) => {
        //uid
        dispatch(savingNewNote());
        const { uid } = getState().auth;
        const newNote: noteClass = {
            id: null,
            title: '',
            body: '',
            date: new Date().getTime(),
            imagesUrls: []
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));

    }
}

export const startLoadingNotes = (): any => {
    return async (dispatch: AppDispatch, getState: typeof store.getState) => {
        const { uid } = getState().auth;
        if (uid) {
            const _uid = uid;
            const notes = await loadNotes(_uid);
            dispatch(setNotes(notes));
        }
    }
}


export const startSaveNote = (): any => {
    return async (dispatch: AppDispatch, getState: typeof store.getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const noteToFireStore = { ...note };
        noteToFireStore.id = null;
        //doc(collection(FirebaseDB, `${uid}/journal/notes/${note?.id}`));<-- esto da error
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note?.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateNote(note));
    }
}

export const starUploadingFiles = (files = []): any => {
    return async (dispatch: AppDispatch, getState: typeof store.getState) => {
        dispatch(setSaving());

        //await fileUpload(files[0]);

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));

    }
}

export const starDeletingNote = (): any => {
    return async (dispatch: AppDispatch, getState: typeof store.getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note?.id}`);
        await deleteDoc(docRef);
        dispatch(deleteNoteById(note?.id));

    }
}