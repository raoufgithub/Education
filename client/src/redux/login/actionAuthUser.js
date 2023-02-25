import {AUTH_USER, GET_USERS} from './actionTypesAuthUser'

export const authUser = (user) => {
    
    return { type: AUTH_USER, payLoad: user };
}

export const getUsers = (users) => {
    return { type: GET_USERS, payLoad:users  };
}