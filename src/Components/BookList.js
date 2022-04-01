import React from 'react';
import {Link} from 'react-router-dom';
import Update from './Update.js'
import Form from './Form.js'

const obituarioList = ({obituario, setObituario, obituarios, setListUpdated}) => {

    const handleDelete = ID => {
        const requestInit = {
            method: 'DELETE'      
        }

        fetch('http://localhost:9000/api/' + ID, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true);
    }
    
    let{nombres, primerApellido, segundoApellido} = obituario

    const handleUpdate = ID => {

        //  // if (titulo === '' || autor === '' || edicion <= 0){
        // //     alert("Todos los campos son obligatorios")
        // //     return
        // // }
        // const requestInit = {
        //     method: 'PUT',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(obituario)          

        // }

        // fetch('http://localhost:9000/api/' + ID, requestInit)
        // .then(res => res.text())
        // .then(res => console.log(res))

        // // setObituario({
        // //     titulo: '',
        // //     autor: '',
        // //     edicion: 0
        // // })

        // setListUpdated(true);
 
    }

    return(
        <table className="table" align="center">
            <thead>
                <tr>
                    <th>OCODIGO_CLIENTE</th>
                    <th>onombres</th>
                    <th>OPAPELLIDO </th>
                    <th>OSAPELLIDO</th>
                    <th>OID</th>
                    <th>ODIR_VELACION</th>
                    <th>OCIUDAD</th>
                    <th>ODPTO</th>
                    <th>OPAIS</th>
                    <th>OFECHAORA</th>
                    <th>ODIRPARROQUIA</th>
                    <th>ONOMBREPARROQUIA</th>
                    <th>OCEMENTERIO</th>
                    <th>OFECHA_ALTAS</th>
                    <th>OFECHA_BAJAS</th>
                    <th>ESTADO</th>
                </tr>
            </thead>
            <tbody>
                {obituarios.map(obituario => (
                    <tr key={obituario.ID}>
                        <td>{obituario.OCODIGO_CLIENTE}</td>
                        <td>{obituario.ONOMBRES}</td>
                        <td>{obituario.OPAPELLIDO}</td>
                        <td>{obituario.OSAPELLIDO}</td>
                        <td>{obituario.OID}</td>
                        <td>{obituario.ODIR_VELACION}</td>
                        <td>{obituario.OCIUDAD}</td>
                        <td>{obituario.ODPTO}</td>
                        <td>{obituario.OPAIS}</td>
                        <td>{obituario.OFECHAORA}</td>
                        <td>{obituario.ODIRPARROQUIA}</td>
                        <td>{obituario.ONOMBREPARROQUIA}</td>    
                        <td>{obituario.OCEMENTERIO}</td>
                        <td>{obituario.OFECHA_ALTAS}</td>
                        <td>{obituario.OFECHA_BAJAS}</td>
                        <td>{obituario.OESTADO}</td>         

                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(obituario.ID)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <Link to='update'><button className="btn btn-dark">Update</button></Link>
                            </div>
                        </td>
                    </tr>  
                ))}                
            </tbody>
        </table>
    )
}

export default obituarioList