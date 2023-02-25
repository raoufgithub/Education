import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addemployee } from '../../redux/employee/actionEmployee'
import Input from '../HTMLComponents/Input';
import '../HTMLComponents/style.css'


const addEmployee = (dispatch,employee) =>{
    /*axios.get(`http://localhost:5000/employee`)
      .then(res => {
        const employees = res.data;
        
      })*/

      axios.post(`http://localhost:5000/api/employee`, 
      {"familyName" : employee.lastName,
        "firstName" : employee.firstName,
        "dateBirthDay" : employee.birthdayDate,
        "dateOfRecriutment" : employee.recruitmentDate,},{
          headers:{
            "x-access-token": localStorage.getItem('token')
          },
        })
      .then(res => {
        dispatch(addemployee(res.data));
        
      })
}

const AddEmployee = () =>{

  const [employee, setEmployee] = useState({firstName:'', lastName:'', birthdayDate:'', recruitmentDate:''});
  const dispatch = useDispatch();
    return (
        <div className='div1-form'>
            <form className='form'>
{              <>
                  <div className='div-form'>
                      <Input className="input input-form"
                      type='text' 
                      placeholder="Type your last name" 
                      onChange={(e) => {setEmployee({...employee, lastName: e.target.value})}} 
                      value={employee.lastName} />

                      <Input  className="input input-form"
                      type="text" 
                      placeholder="Type your first name"
                      onChange={(e) => {setEmployee({...employee, firstName: e.target.value})}} 
                      value={employee.firstName} />

                  </div>
                  <div className='div-form'>
                      <Input  className="input input-date"
                      type="date" 
                      placeholder="Type Birthday"
                      onChange={(e) => {setEmployee({...employee, birthdayDate: e.target.value})}} 
                      value={employee.birthdayDate} />
                  
                  
                      <Input  className="input input-date"
                      type="date" 
                      placeholder="Type Birthday Recruitment"
                      onChange={(e) => {setEmployee({...employee, recruitmentDate: e.target.value})}} 
                      value={employee.recruitmentDate} />
                  
                  </div>
                  <div  className='div-form'>
                    <button className="button-form" onClick={() => addEmployee(dispatch,employee)}>Add Employee</button>
                  </div>
              
              </>
}          </form>
            
        </div>
    )
}
export default AddEmployee