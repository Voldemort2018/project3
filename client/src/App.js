import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import Users  from './Components/users/User';

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