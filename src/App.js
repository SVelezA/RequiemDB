import React, {Fragment, useState, useEffect, Component, Button} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import Form from './Components/Form';
// import Update from './Components/Update';
// import Home from './Components/Home';


function App() {  
  
    const [obituario, setObituario] = useState({
      ocodigo_cliente: 0,
      onombres: '',
      opapellido: '',
      osapellido: '',
      oid: 0,
      odir_velacion: '',
      ociudad: '',
      odpto: '',
      opais: '',
      ofechaora: 0,
      odirparroquia: '',
      ocementerio: '',
      ofecha_altas: 0,
      ofecha_bajas: 0,
      estado: ''
    })
    
    const [obituarios, setObituarios] = useState([]);
  
    const [listUpdated, setListUpdated] = useState(false);
  
    useEffect(() => {
      const getObituarios = () => {
          fetch('http://localhost:9000/api')
          .then(res => res.json())
          .then(res => setObituarios(res))
       }
      getObituarios()
      setListUpdated(false)
    }, [listUpdated])



  return(   

          
              <div className="container">
                    
  
              <Navbar brand="Tabla Obituario"/>
                  <div className="row">
                      <div className="col-7"> 
                          <h2 style={{textAlign: "center"}}>Contenido</h2>
                          <BookList obituario={obituario} setoObituario={setObituario} obituarios={obituarios} setListUpdated={setListUpdated}/>
                      </div>
                      
                  </div>
                  <div className="row">
                      <div className="col-5">
                          <h2 style={{textAlign: "center"}}>Book Form</h2>
                          <Form obituario={obituario} setObituario={setObituario} />
                      </div>
                  </div>
                {/* <Router>
                  <Routes>
                    <Route exact path='/' element={<Home />} />
                  </Routes>
                 </Router>                 */}
              </div>
          

  );

}

export default App;
