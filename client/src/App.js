import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pageRoutes } from './routes';
import Navbar from './Components/navbar/Navbar';

class App extends Component {
  render() {
    const routes = pageRoutes();
    return (
      <Router>
        <div>
          <Navbar/>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
