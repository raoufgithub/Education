import {React, useState,useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import loader from '../../assets/loader.gif';
import {getEmployees} from '../../redux/employee/actionEmployee';
import Table from '../HTMLComponents/Table';

import axios from 'axios'

/*let colonnes = ["firstName", "familyName", "Date de naissance", "Lieu de nassance"];
let lines = [{"firstName" : "raouf", "familyName" : "menasri", "Date de naissance" : "21052022", "Lieu de nassance" : "medea"},
{"firstName" : "raouf", "familyName" : "menasri", "Date de naissance" : "21052022", "Lieu de nassance" : "medea"},
{"firstName" : "raouf", "familyName" : "menasri", "Date de naissance" : "21052022", "Lieu de nassance" : "medea"},
{"firstName" : "raouf", "familyName" : "menasri", "Date de naissance" : "21052022", "Lieu de nassance" : "medea"}]
*/
function EmployeeList() {
  
  
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees)

  const getEmployee =  () =>{
    axios.get(`http://localhost:5000/api/employee`, {
      headers:{
        "x-access-token": localStorage.getItem('token')
      },
    })
      .then((res) => {
        dispatch(getEmployees(res.data))
      })
      .catch(() => console.log("Couldn't contact the API"))
      
  }
 
  useEffect( () => {
    getEmployee();
    
  }, [])
  useEffect(() => {
    console.log(employees)
  },[employees])

  return (
    <Table rows= {employees} />
  )


}
export default EmployeeList;