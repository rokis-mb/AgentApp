import React from 'react'
import '../../CSS/RadioBtn.css'

const RadioBtn = (props) => {
    return (

        <div className='my-radio-container'>
            <input type="radio" id={`radio${props.label}`} name={`radio${props.name}`} value={props.value} checked />
            <label for={`radio${props.label}`}>{props.label}</label>
        </div>
    )
}

export default RadioBtn