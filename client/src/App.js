import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pageRoutes } from './routes';
import Navbar from './Components/navbar/Navbar';
<<<<<<< HEAD
=======
import Home from './Components/home/Home';
<<<<<<< HEAD
import Users  from './Components/users/Users';
=======
import Users  from './Components/users/User';
>>>>>>> f1439bf7b94c42443ad6755e589c78e43d2e31b5
>>>>>>> 6b9c03d8ef18a5c2be3da9236e3bbd5c523bdc64

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