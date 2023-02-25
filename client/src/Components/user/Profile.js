import React from 'react'
import { useAuth } from '../Login/Auth'


const Profile = () => {
  const auth = useAuth();
  /* const token = localStorage.getItem("token");

  const decode = jwtDecode(token) */
  
  return (
    
    <div>Welcome the user : { auth.user }</div>
  )
}

export default Profile
