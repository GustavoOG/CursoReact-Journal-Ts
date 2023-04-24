import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { noteClass } from '../../interface/noteClass';

export interface journalState {
    isSaving: boolean,
    messageSaved: string,
    notes: Array<noteClass>,
    active: noteClass | null
}

const initialState: journalState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: { Id: '', title: '', body: '', imagesUrls: []  } as noteClass
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
            state.messageSaved = "";
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = "";
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            state.messageSaved = `${action.payload.title}, actualizada correctamente`;
        },
        setPhotosToActiveNote: (state, action: PayloadAction<string[]>) => {

            //state.active.imagesUrls ?? state.active.imagesUrls =  new Array;
            //state.active.imagesUrls = [...state.active?.imagesUrls, ...action.payload];
            state.active.imagesUrls = [...(Array.from(state.active.imagesUrls)), ...action.payload];
            state.isSaving = false;
        },

        clearNotesLogout: (state, action) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload);
        }
    },
})

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, clearNotesLogout, deleteNoteById } = journalSlice.actions;