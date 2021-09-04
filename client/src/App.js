import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
     
        
        <Router>
            <NavBar/>
            <div className='container'>
              <Route exact path="/" component={Home} />
            </div>
        </Router>
    
    </div>
  );
}

export default App;
/*  test*/