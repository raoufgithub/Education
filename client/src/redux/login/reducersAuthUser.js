import { action } from './actionAuthUser'

export class UserState {users}
let initialState = { users : [] };

export const authUserReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'AUTH_USER':
            
            
            return { users: [...state.users,action.payLoad] };
        case 'GET_USERS':
            
            return { ...state, users: action.payLoad };
        default:
            return state;
    }
}
