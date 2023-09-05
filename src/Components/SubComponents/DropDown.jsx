import React from 'react'
import '../../CSS/DropDown.css'

const DropDown = (props) => {
    return (
        <div>
            <select onChange={props.onChange} defaultValue={props.defaultValue} className='my-dropdown'>
                <option value=''>-- {props.info} --</option>
                {props.options.map((option) => (
                    <option
                        value={option.value}
                        className="dropdown-item"
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown