import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import {
    authReducer,
    AuthState,
    SIGN_IN_REQUEST
} from './auth';
import SignInRequestSaga from './auth/saga';

export * from './auth';

declare global {
    // tslint:disable-next-line:no-any
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

// app state interface
export interface AppState {
    auth: AuthState;
}

// preparing app reducer
const appReducer = combineReducers({
    auth: authReducer,
});

// preparing sagas
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function* appSaga() {
    yield takeEvery(SIGN_IN_REQUEST, SignInRequestSaga);
}

const sagaMiddleware = createSagaMiddleware();

// creating store
export const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// running all sagas
sagaMiddleware.run(appSaga);

// export default store;
