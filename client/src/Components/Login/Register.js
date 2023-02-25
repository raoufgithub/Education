import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { adduser } from '../../redux/user/actionUser'
import Input from '../HTMLComponents/Input';
import '../HTMLComponents/style.css'

import Popup from '../popup/Popup'; 





const Register = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [user, setUser] = useState({firstName:'', lastName:'', email:'', password:'', birthdate:"", passwordConfirm:""});
  const dispatch = useDispatch();


  /******************************************************************* */
  const addUser = (dispatch,user) =>{
    if (user.password!==user.passwordConfirm){
      
      setButtonPopup(true)
      setMessageError("the password doesn't much confirm password")
    }
    else{
      
        axios.post(`http://localhost:5000/api/user`, 
        {"lastName" : user.lastName,
          "firstName" : user.firstName,
          "email" : user.email,
          "password" : user.password,
          "birthDate" : user.birthdate,
          })
        .then(res => {
          dispatch(adduser(res.data));
          
        })
        .catch(
          console.log('error')
        )
  
    }
  }
  



  /******************************************************************* */
  return (
    <div>
            <form className='form'>
{              <>
                  <div className='div-form'>
                      <Input className="input input-form"
                      type='text' 
                      placeholder="Type your last name" 
                      onChange={(e) => {setUser({...user, lastName: e.target.value})}} 
                      value={user.lastName} />

                      <Input  className="input input-form"
                      type="text" 
                      placeholder="Type your first name"
                      onChange={(e) => {setUser({...user, firstName: e.target.value})}} 
                      value={user.firstName} />

                  </div>
                  <div className='div-form'>
                      <Input  className="input input-form"
                      type="text" 
                      placeholder="Type your email address"
                      onChange={(e) => {setUser({...user, email: e.target.value})}} 
                      value={user.email} />
                  
                  
                      <Input  className="input input-form"
                      type="date" 
                      placeholder="Type your Birth Date"
                      onChange={(e) => {setUser({...user, birthdate: e.target.value})}} 
                      value={user.birthdate} />
                  
                  </div>
                  <div className='div-form'>
                  <Input  className="input input-form"
                      type="password" 
                      placeholder="Type your password"
                      onChange={(e) => {setUser({...user, password: e.target.value})}} 
                      value={user.password} />
                  
                  
                      <Input  className="input input-form"
                      type="password" 
                      placeholder="Confirm your password"
                      onChange={(e) => {setUser({...user, passwordConfirm: e.target.value})}} 
                      value={user.passwordConfirm} />
                  
                  </div>
                  <div  className='div-form'>
                    <button type='button' className="button-form" onClick={() => addUser(dispatch,user)}>Add User</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                      <h3>the password doesn't much confirm password </h3>
                    </Popup>
                  </div>
              
              </>
}          </form>
            
        </div>
    )
  
}


export default Register