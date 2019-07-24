import { call, put } from 'redux-saga/effects';
import {
    METHOD_POST,
    passwordCoding,
    requestBuilder,
} from '../../../helpers';
import {
    signInFailure,
    SignInRequest,
    signInSuccess,
} from '../actions';

export default function* SignInRequestSaga(action: SignInRequest) {
    try {
        const data = yield call(
            requestBuilder,
            '/login',
            METHOD_POST,
            {
                Email: action.email,
                Password: passwordCoding(action.password),
            }
        );
        if (data.Error) {
            yield put(signInFailure());
        } else {
            yield put(signInSuccess());
        }
    } catch (error) {
        yield put(signInFailure());
    }
}
