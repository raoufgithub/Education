import { action } from './actionEmployee'

export class EmployeeState {employees}
let initialState = { employees : [] };

export const employeeReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_EMPLOYEES':
            
            
            return { ...state, employees: [...state.employees,action.payLoad] };
        case 'GET_EMPLOYEES':
            
            return { ...state, employees: action.payLoad };
        default:
            return state;
    }
}
