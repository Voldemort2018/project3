import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Users from './Components/users/Users';
import Home from './Components/home/Home';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
}

export const pageRoutes = () => {
    return (
        <Router history={history}>
            <div>

                <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/users" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/" />
                    ) : (
                            <Users auth={auth} {...props} />
                        )
                )} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }} />
            </div>
        </Router>
    );
}

