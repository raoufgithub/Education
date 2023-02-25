import React from 'react'
import './style.css'

function Table({rows}) {
    
    let colNames = {};
    if(rows.length > 0)
    {   
        colNames = Object.keys(rows[0]);
    }
    if (colNames.length > 0){
        
    return (
        
        <div >
            
            {/*
                
                rows.map((row, index) => (
                    <div key={index}>
                    {
                        Object.values(row).map((line, index2) => (
                                <h2 key={index+index2}>
                                    {line}
                                </h2>
                        ))}
                    </div>      
                    
                ))
                        */}
            {
            <table>
                <thead>
                    <tr>
                        {
                            /*colNames.map((headerName, index) => (
                                <th key={index}>
                                    {headerName}
                                </th>
                            ))*/
                            <>
                                <th>NOM</th>
                                <th>PRENOM</th>
                                <th>DATE DE NAISSANCE</th>
                                <th>DATE DE RECRUTEMENT</th>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, index) => (
                            <tr key={row._id}>
                                {
                                    /*Object.values(row).map((cell, index2) => (
                                        <td key={index+index2}>
                                            { //(row._id === cell)?cell:''
                                            
                                                //Object.keys(row)._id
                                                //Object.keys(row._id)
                                                cell
                                            }
                                        </td>
                                    ))*/
                                    <>
                                    <td>{row.familyName}</td>
                                    <td>{row.firstName}</td>
                                    <td>{row.dateBirthDay}</td>
                                    <td>{row.dateOfRecriutment}</td>
                                    </>
                                }   
                            </tr>
                        ))
                    }
                </tbody>
                </table> }
        </div>
    )
    }
    else return <div></div>
}
export default Table;