import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export const RequireAuth = ({path,children}) => {
  const location = useLocation()
  const auth = useAuth()
  const relativePath = path + '/Login'
  if (!auth.user){
      // return <Navigate to='login' state={{path: location.pathname}} />
      return <Navigate to={relativePath} />
  }
  return children;
}