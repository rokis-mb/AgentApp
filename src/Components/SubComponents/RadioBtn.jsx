import React from 'react'
import '../../CSS/RadioBtn.css'

const RadioBtn = (props) => {
    return (

        <div className='my-radio-container'>
            <input type="radio" id={`radio${props.label}`} name={`radio${props.name}`} checked={props.checked} defaultChecked={props.defaultChecked} value={props.value} onChange={props.onChange} />
            <label for={`radio${props.label}`}>{props.label}</label>
        </div>
    )
}

export default RadioBtn