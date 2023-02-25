import React from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import "./HTMLComponents/style.css"
import { useAuth } from './Login/Auth'


export const Navbar = () => {
  const auth = useAuth()
  /* const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/Login/Login' */

  
  return (
    <nav>
        {auth.user &&
          <NavLink to="employee/EmployeeList">List Employee</NavLink>
        }
        {auth.user &&
          <NavLink to="employee/AddEmployee">New Employee</NavLink>
        }
        
        {auth.user &&
          <NavLink to="user/Profile">Profile</NavLink>
        }
        {auth.user &&
          <NavLink to="Login/Logout">Logout</NavLink>
        }
        {!auth.user &&
          <NavLink to="Login/Register">Register</NavLink>
        }
        {!auth.user &&
          <NavLink to="Login/Login">Login</NavLink>
        }
        
    </nav>
  )
}
