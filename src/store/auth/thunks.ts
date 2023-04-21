import { loginWithEmailPassword, logoutFirebase, registerUsersWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { loginClass } from "../../interface/loginClass";
import { clearNotesLogout } from "../journal";
import { AppDispatch, store } from "../store";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication: any = (email: string, password: string) => {
  return async (dispatch: AppDispatch, getState: typeof store.getState) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn: any = () => {
  return async (dispatch: AppDispatch, getState: typeof store.getState) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  };
};


export const startCreatingUserWithEmailPassword = (loginData: loginClass) => {

  return async (dispatch: AppDispatch, getState: typeof store.getState) => {
    dispatch(checkingCredentials());
    const result = await registerUsersWithEmailPassword(loginData);
    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  };
}

export const startLoginWithEmailPassword = (loginData: loginClass) => {

  return async (dispatch: AppDispatch, getState: typeof store.getState) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword(loginData);
    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))

  };
}

export const starLogout = () => {

  return async (dispatch: AppDispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout())
  }
}

