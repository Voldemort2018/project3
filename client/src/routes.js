import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import User from './Components/users/User';
import Home from './Components/home/Home';
require("dotenv").config();

const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

export const pageRoutes = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route exact path="/user" render={(props) => <User auth={auth} {...props} />} />
                <Route exact path="/#about" render={(props) => <Home auth= {auth} {...props} />} />
                <Route path="/callback" render={props => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }} />
            </div>
        </Router>
    );
}





