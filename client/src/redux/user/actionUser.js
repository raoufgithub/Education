import {ADD_USERS, GET_USERS} from './actionTypesUser'

export const adduser = (user) => {
    
    return { type: ADD_USERS, payLoad: user };
}

export const getUsers = (users) => {
    return { type: GET_USERS, payLoad:users  };
}