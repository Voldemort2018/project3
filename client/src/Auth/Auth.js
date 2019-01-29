import history from "../history";
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './auth0-variables.js';

console.log(process.env.REACT_APP_BATMAN)
export default class Auth {
    lock = new Auth0Lock( AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
        autoclose: true,
        auth: {
            redrectUrl: AUTH_CONFIG.callbackURL,
            responseType: "token id_token",
            params: {
                scope: "openid home user"
            }
        }
    });

    constructor() {
        this.handleAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login() {
        this.lock.show();
    }

    handleAuthentication() {
        this.lock.on("authenticated", this.setSession.bind(this));

        this.lock.on("authorization_error", err => {
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
            history.replace("/home");
        });
    }

    setSession(authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
            
            let expiresAt = JSON.stringify(
                authResult.expiresIn * 1000 + new Date().getTime()
            );

            this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    return;
                }
                console.log(profile);
                localStorage.setItem("user", JSON.parse(profile));
            });

            localStorage.setItem("access_token", authResult.accessToken);
            localStorage.setItem("id_token", authResult.idToken);
            localStorage.setItem("expires_at", expiresAt);
            // navigate to the home route
            history.replace("/user");
        }
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        history.replace("/");
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }
}