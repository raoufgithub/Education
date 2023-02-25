import { useSelector } from "react-redux"
import { EmployeeState } from './reducers'
export const Header = () => {
    const count = useSelector((state) => state.count)
    
    return (
        <>
        <p>Shopping cart : {count}</p>
        </>
    )
}
