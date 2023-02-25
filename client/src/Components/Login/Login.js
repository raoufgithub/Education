import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { authUser } from '../../redux/login/actionAuthUser'
import Input from '../HTMLComponents/Input';
import '../HTMLComponents/style.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'




export const Login = () => {
  const [user, setUser] = useState({ email:'', password:''});
  const dispatch = useDispatch();
  
  /***************************************************** */
  const auth = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/employee/EmployeeList'
  const Authenticate = (user) =>{
  
    
  
      axios.post(`http://localhost:5000/api/login`, 
      {"email" : user.email,
        "password" : user.password,})
      .then(res => {
        
        const {token} = res.data
        
        localStorage.setItem('token', token)
        
        auth.login(user.email)
        // navigate('/employee/EmployeeList')
        navigate(redirectPath, {replace:true})
  
      })
      .catch(
        console.log('error')
      )
  }


  /***************************************************** */
  return (
    <div className='div1-form'>
            <form className='form'>
{              <>

                  <div className='div-form'>
                      <Input  className="input input-date"
                      type="text" 
                      placeholder="Type your email address"
                      onChange={(e) => {setUser({...user, email: e.target.value})}} 
                      value={user.email} />
                  
                  
                      <Input  className="input input-date"
                      type="password" 
                      placeholder="Type password"
                      onChange={(e) => {setUser({...user, password: e.target.value})}} 
                      value={user.password} />
                  
                  </div>
                  <div  className='div-form'>
                    <button type='button' className="button-form" onClick={() => Authenticate(user)}>Login</button>
                  </div>
              
              </>
}          </form>
            
        </div>
    )
}

export default Login
