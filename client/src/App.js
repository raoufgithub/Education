import logo from './logo.svg';
import './App.css';
import EmployeeList from './Components/employee/EmployeeList'
import AddEmployee from './Components/employee/AddEmployee';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';
import Logout from './Components/Login/Logout';
import Profile from './Components/user/Profile';
import NotFoundPage from './Components/NotFoundPage';
//import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import { Header } from './reduxorig/Header';
import { Content } from './reduxorig/Content';
import { Navbar } from './Components/Navbar';
import {AuthProvider} from './Components/Login/Auth'

import { Provider } from 'react-redux';
import store from './redux/employee/storeEmployee';
import { RequireAuth } from './Components/Login/RequireAuth';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="App">
          
            <Navbar />
            <Routes>
              <Route path="/employee/addemployee" 
                  element={
                  <RequireAuth path='../Login'>
                    <AddEmployee/>
                  </RequireAuth>
                    }>
              </Route>
              <Route path="/employee/EmployeeList" 
                  element={
                  <RequireAuth path='../Login'>
                    <EmployeeList/>
                  </RequireAuth>
                    }>
              </Route>
              <Route path="/Login/Register" element={<Register />}></Route>
              <Route path="/Login/Login" element={<Login />}></Route>
              
              <Route path="/Login/Logout" 
                  element={
                  <RequireAuth path='../Login'>
                    <Logout/>
                  </RequireAuth>
                    }>
                  
                
              </Route>
              <Route path="/user/Profile" 
                  element={
                  <RequireAuth path='../Login'>
                    <Profile/>
                  </RequireAuth>
                    }>
                  
                
              </Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>


          
          
          
          
          {/* <AddEmployee />
          <EmployeeList /> */}
          
          
          
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;

