import { SignInAction } from './actions';
import {
    SIGN_IN_FAILURE,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
} from './constants';

export interface AuthState {
    loading: boolean;
    success: boolean;
    error: boolean;
}

const initialState: AuthState = {
    loading: false,
    success: false,
    error: false,
};

export const authReducer = (state: AuthState = initialState, action: SignInAction) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};
