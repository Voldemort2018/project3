import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/home';
import NavbarLogin from './components/navbar/navbar';
import About from './components/about/about';
import Login from './components/login/login';
import What from './components/what/what';

class App extends Component {
  render() {
    let homeComponent = "";
    switch(this.props.location) {
      case "":
        homeComponent= Home;
        break;
      case "login":
        homeComponent= Login; 
        break;
      default:
      // will probably want to make the default page "Page Not Found" so that we know that the router is not correct.
        homeComponent = Home;

    }

    return (
      <Router>
        <div>
          <NavbarLogin/>
          <Route exact path ="/"component = {homeComponent} />
          <Route exact path = "/about" component = {About}/>
          <Route exact path = "/login" component = {homeComponent}/>
          <Route exact path = "/what" component = {What}/>
        </div>
      </Router>
    )
  }
}

export default App;
