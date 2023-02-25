import {useState, useContext, createContext} from 'react'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("token");
    let email = null
    if (token)email = jwtDecode(token).email
        
    
    
    const [user, setUser] = useState(email)
    
    const login = (user) => {

        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null)        
    }

    return(
        <AuthContext.Provider value = {{user, login, logout}}> 
            {children}
        </AuthContext.Provider>
        
    )

    
}


export const useAuth = () => {
    return useContext(AuthContext)
}