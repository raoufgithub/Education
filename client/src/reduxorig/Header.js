import { useSelector } from "react-redux"
import { shoppingCartState } from './reducers'
export const Header = () => {
    const count = useSelector((state) => state.count)
    console.log(count)
    return (
        <>
        <p>Shopping cart : {count}</p>
        </>
    )
}
