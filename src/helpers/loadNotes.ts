import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { noteClass } from '../interface/noteClass';



export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('EL UID del usuario no existe');
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const notes: Array<noteClass> = [];
    docs.forEach(doc => {
        notes.push({ ...doc.data(), id: doc.id });
    });
    return notes;
}

