import React, {useState} from 'react'
import './style.css'


function Input(props) {
  const [value, setValue] = useState({value:''})
  return (
    <input className={props.className}
    type={props.type} 
    placeholder={props.placeholder} 
    onChange={props.onChange} 
    value={props.value}></input>
  )
}

export default Input