import { createStore } from 'redux'
import { shoppingCartReducer } from './reducers'

const store = createStore(shoppingCartReducer);
export default store;