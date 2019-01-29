import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pageRoutes } from './routes';


console.log(process.env.REACT_APP_BATMAN)

class App extends Component {
  render() {
    const routes = pageRoutes();
    return (
      <Router>
        <div>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
