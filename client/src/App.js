import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
<<<<<<< HEAD
import Users  from './Components/users/Users';
=======
import Users  from './Components/users/User';
>>>>>>> f1439bf7b94c42443ad6755e589c78e43d2e31b5

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path = "/" component = {Home}/>
          <Route exact path ="/users" component ={Users}/>
        </div>
      </Router>
    );
  }
}

export default App;