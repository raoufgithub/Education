import { createStore } from 'redux'
import { userReducer } from './reducersUser'

const store = createStore(userReducer);
export default store;