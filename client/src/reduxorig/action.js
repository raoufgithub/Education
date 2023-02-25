import {increment, decrement} from './actiontypes'

export const incrementCount = (inc) => {
    return { type: increment, payLoad: inc };
}

export const decrementCount = (dec) => {
    return { type: decrement, payLoad: dec };
}