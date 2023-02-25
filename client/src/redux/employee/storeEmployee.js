import { createStore } from 'redux'
import { employeeReducer } from './reducersEmployee'

const store = createStore(employeeReducer);
export default store;