import { AppState } from '../';

export const selectSignInLoading = (state: AppState): boolean => state.auth.loading;
export const selectSignInSuccess = (state: AppState): boolean => state.auth.success;
export const selectSignInFailure = (state: AppState): boolean => state.auth.error;
