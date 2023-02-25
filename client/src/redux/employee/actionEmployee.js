import {ADD_EMPLOYEES, GET_EMPLOYEES} from './actionTypesEmployee'

export const addemployee = (employee) => {
    console.log("action employee ")
    
    return { type: ADD_EMPLOYEES, payLoad: employee };
}

export const getEmployees = (employees) => {
    return { type: GET_EMPLOYEES, payLoad:employees  };
}