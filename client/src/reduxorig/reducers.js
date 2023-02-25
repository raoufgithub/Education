import { action } from './action'

export class shoppingCartState {count}
let initialState = { count: 0 };

export const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payLoad };
        case 'decrement':
            return { ...state, count: state.count - action.payLoad };
        default:
            return state;
    }
}
