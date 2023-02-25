import { action } from './actionUser'

export class UserState {users}
let initialState = { users : [] };

export const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'ADD_USERS':
            
            
            return { ...state, users: [...state.users,action.payLoad] };
        case 'GET_USERS':
            
            return { ...state, users: action.payLoad };
        default:
            return state;
    }
}
