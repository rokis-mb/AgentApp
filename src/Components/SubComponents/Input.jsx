import React from 'react'
import '../../CSS/Input.css'

const Input = (props) => {
    return (
        <div className='my-input-container'>
            <input type={props.type} defaultValue={props.defaultValue} onChange={props.onChange} className="my-input"  />
        </div>
    )
}

export default Input