import {useEffect} from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

import { useAuth } from './Auth'

const Logout = () => {
    const auth = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/Login/Login'
    useEffect(() =>{
        auth.logout()
    
        navigate(redirectPath, {replace:true})
    },[])
  return (
    <div>Logout</div>
  )
}
export default Logout