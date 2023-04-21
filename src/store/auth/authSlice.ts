import { createSlice } from '@reduxjs/toolkit'

export interface authState {
    status: string | null,
    uid: string | null,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
    errorMessage: string | null
}

const initialState: authState = {
    status: 'checking', //'checking','not-authenticated','authenticated'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = payload.errorMessage
        },
        logout: (state, { payload }) => {


            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload ?? '';
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    },
})

export const { login, logout, checkingCredentials } = authSlice.actions;