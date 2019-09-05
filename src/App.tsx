import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
} from 'react-router-dom';
import './App.css';
import { store } from './modules';
import { SignInPage, TransactionsPage } from './pages';

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            {/* <Route path="/sign-in" exact={true} component={SignInPage}/> */}
            {/* <Route path="/" render={() => (<Redirect to="/sign-in" />)} /> */}
            <Route path="/" component={TransactionsPage}/>
        </Router>
    </Provider>
);

export default App;
