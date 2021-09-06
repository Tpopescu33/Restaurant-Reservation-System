import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import Login from './Components/Login/Login'

import './App.css';

function App() {
  return (
    <div className="App">
     
        
        <Router>
            <NavBar/>
            <div className='container'>
              <Route exact path="/" component={Home} />
            </div>
            <div className='container'>
              <Route exact path="/login" component={Login} />
            </div>
        </Router>
    
    </div>
  );
}

export default App;
/*  test*/