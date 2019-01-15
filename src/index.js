import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);

    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

let initialState = {
    name: "amanda",
    location: location.pathname.replace(/^\/?|\/$/g, "")
};

window.setState(initialState);