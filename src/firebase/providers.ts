import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { loginClass } from "../interface/loginClass";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        //console.log(credentials);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true, displayName, email, photoURL, uid
        }

    } catch (error) {
        //console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUsersWithEmailPassword = async (loginData: loginClass) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, loginData.email, loginData.password);
        const { uid, photoURL } = resp.user;
        //TODO: actualziar el display name y photo en firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName: loginData.displayName })
        return {
            ok: true,
            photoURL, uid, displayName: loginData.displayName, email: loginData.email
        }
    }
    catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async (loginData: loginClass) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, loginData.email, loginData.password);
        return {
            ok: true,
            photoURL: resp.user.photoURL, uid: resp.user.uid, displayName: resp.user.displayName, email: loginData.email
        }
    }
    catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();

}