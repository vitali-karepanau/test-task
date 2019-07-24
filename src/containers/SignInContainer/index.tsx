import React from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { SignInComponent } from '../../components';
import {
    selectSignInFailure,
    selectSignInLoading,
    selectSignInSuccess,
    signInRequest,
} from '../../modules';

export const SignInContainer = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectSignInLoading);

    const handleSubmit = (email: string, password: string) => {
        dispatch(signInRequest(email, password));
    };

    return (
        <SignInComponent
            loading={loading}
            onSubmit={handleSubmit}
            error={null}
        />
    );
};
