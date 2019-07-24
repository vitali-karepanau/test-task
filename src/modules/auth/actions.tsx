import {
    SIGN_IN_FAILURE,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
} from './constants';

export interface SignInRequest {
    type: typeof SIGN_IN_REQUEST;
    email: string;
    password: string;
}

export interface SignInSuccess {
    type: typeof SIGN_IN_SUCCESS;
}

export interface SignInFailure {
    type: typeof SIGN_IN_FAILURE;
}

export type SignInAction = SignInSuccess | SignInFailure | SignInRequest;

export const signInRequest = (email: string, password: string): SignInRequest => ({
    type: SIGN_IN_REQUEST,
    email,
    password,
});

export const signInSuccess = (): SignInSuccess => ({
    type: SIGN_IN_SUCCESS,
});

export const signInFailure = (): SignInFailure => ({
    type: SIGN_IN_FAILURE,
});
