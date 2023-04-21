// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2wSn_Tb5aqyfX23lz8kvRaeME7Ue9dsQ",
    authDomain: "react-cursos-7bb44.firebaseapp.com",
    projectId: "react-cursos-7bb44",
    storageBucket: "react-cursos-7bb44.appspot.com",
    messagingSenderId: "595296051494",
    appId: "1:595296051494:web:d4e616549b25d60d3ae1e7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);

