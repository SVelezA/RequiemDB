import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Home from './Home'

const Form = ({obituario, setObituario}, props) => {

    const handleChange = e => {
        setObituario({
            ...obituario, 
            [e.target.name]: e.target.value
        })

    }
    
    

    const handleSubmit = () => {
        // edicion = parseInt(edicion, 10)
        // //validacion de los datos
        // if (titulo === '' || autor === '' || edicion <= 0){
        //     alert("Todos los campos son obligatorios")
        //     return
        // }


        // Consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obituario)          
        }

        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.test())
        .then(res => console.log(res))

        //r Reiniciando state de Libro
        setObituario({
            OCODIGO_CLIENTE: 0,
            ONOMBRES: '',
            OPAPELLIDO: '',
            OSAPELLIDO: '',
            OID: 0,
            ODIR_VELACION: '',
            OCIUDAD: '',
            ODPTO: '',
            OPAIS: '',
            OFECHAORA: '',
            ODIRPARROQUIA: '',
            ONOMBREPARROQUIA: '',
            OCEMENTERIO: '',
            OFECHA_ALTAS: '',
            OFECHA_BAJAS: '',
            ESTADO: ''
        })

    }

    const params = useParams();   

    return(
        
        <form onSubmit={handleSubmit}>
            <div>
                <h2>ACTUALIZAR INFORMACION</h2>
            </div>
            <div className="mb-3">
                  <label htmlFor="OCODIGO_CLIENTE" className="form-label">OCODIGO_CLIENTE</label>
                  <input name="ocodigo_cliente" value= "" onChange={handleChange} type="text" id="ocodigo_cliente" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="ONOMBRES" className="form-label">ONOMBRES</label>
                  <input name="autonombres" onChange = {handleChange} type= "text" id="onombres" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OPAPELIDO" className="form-label">OPAPELLIDO</label>
                  <input name="opapellido" onChange = {handleChange} type="number" id="OPAPELLIDO" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OSAPELLIDO" className="form-label">OSAPELLIDO</label>
                  <input name="osapellido" onChange = {handleChange} type="number" id="OSAPELLIDO" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OID" className="form-label">OID</label>
                  <input name="oid" value={params.updateID} onChange = {handleChange} type="number" id="OID" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="ODIR_VELACION" className="form-label">ODIR_VELACION</label>
                  <input name="odir_velacion" onChange = {handleChange} type="number" id="ODIR_VELACION" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OCIUDAD" className="form-label">OCIUDAD</label>
                  <input name="ociudad" onChange = {handleChange} type="number" id="OCIUDAD" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="ODPTO" className="form-label">ODPTO</label>
                  <input name="odpto" onChange = {handleChange} type="number" id="ODPTO" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OPAIS" className="form-label">OPAIS</label>
                  <input name="opais" onChange = {handleChange} type="number" id="OPAIS" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OFECHAORA" className="form-label">OFECHAORA</label>
                  <input name="ofechaora" onChange = {handleChange} type="number" id="OFECHAORA" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="ODIRPARROQUIA" className="form-label">ODIRPARROQUIA</label>
                  <input name="odirparroquia" onChange = {handleChange} type="number" id="ODIRPARROQUIA" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="ONOMBREPARROQUIA" className="form-label">ONOMBREPARROQUIA</label>
                  <input name="onombreparroquia" onChange = {handleChange} type="number" id="ONOMBREPARROQUIA" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OCEMENTERIO" className="form-label">OCEMENTERIO</label>
                  <input name="ocementerio" onChange = {handleChange} type="number" id="OCEMENTERIO" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OFECHA_ALTAS" className="form-label">OFECHA_ALTAS</label>
                  <input name="ofecha_altas" onChange = {handleChange} type="number" id="OFECHA_ALTAS" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="OFECHA_BAJAS" className="form-label">OFECHA_BAJAS</label>
                  <input name="ofecha_bajas" onChange = {handleChange} type="number" id="OFECHA_BAJAS" className="form-control"/>
            </div>
            <div className="mb-3">
                  <label htmlFor="ESTADO" className="form-label">ESTADO</label>
                  <input name="estado" onChange = {handleChange} type="number" id="ESTADO" className="form-control"/>
            </div>
            
            
                <button type ="submit" className="btn btn-primary">Actualizar</button>
                <Link to='../'><button type ="button" className="btn btn-info">Regresar</button></Link>

            
           
        </form>
    )
}

export default Form