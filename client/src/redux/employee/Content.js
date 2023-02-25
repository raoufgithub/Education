import { useDispatch } from "react-redux"
import { incrementCount, decrementCount } from './action'
export const Content = () => {
    const dispatch = useDispatch();

    return (
        <>
            <p><button onClick={() => dispatch(incrementCount(1))}>Add 1 to cart</button></p>
            <p><button onClick={() => dispatch(decrementCount(1))}>Delete 1 from cart</button></p>
        </>
    )
}