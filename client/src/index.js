import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);

    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

/* eslint no-restricted-globals: 0*/

let initialState = {
    name: "amanda",
    location: location.pathname.replace(/^\/?|\/$/g, "")
};

window.setState(initialState);





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// let state = {};
// window.setState = (changes) => {
//     state = Object.assign({}, state, changes);

//     ReactDOM.render(<App {...state}/>, document.getElementById('root'));
// }

// let initialState = {
//     name: "amanda",
//     location: location.pathname.replace(/^\/?|\/$/g, "")
// };

// window.setState(initialState);
>>>>>>> ccef203670f18287994fb1630c885eeb64635318
