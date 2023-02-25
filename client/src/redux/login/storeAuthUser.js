import { createStore } from 'redux'
import { userReducer } from './reducersAuthUser'

const store = createStore(userReducer);
export default store;