import React, {Fragment, useState, useEffect, Component, Button} from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import Form from './Components/Form';
import Update from './Components/Update';
import Home from './Components/Home';


function App() {  
  return(   

          
              <div className="container">
              <Home />
                  <Router>
                    <Routes>
                      <Route path='/' element={Home} />
                      <Route path='/update' element={Update} />
                    </Routes>                  
                    </Router>            
              </div>         
  );
}

export default App;
