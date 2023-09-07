import React from 'react'
import '../../CSS/Input.css'

const Input = (props) => {
    return (
        <div className='my-input-container'>
            <input className="my-input"
            type={props.type} 
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            disabled={props.disabled}
            value={props.value}
            readOnly={props.readOnly}/>
        </div>
    )
}

export default Input