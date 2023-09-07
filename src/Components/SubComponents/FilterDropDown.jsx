import React from 'react'
import '../../CSS/DropDown.css'

const FilterDropDown = (props) => {
    return (
        <div>
            <select onChange={props.onChange} value={props.value} defaultValue={props.defaultValue} className='my-dropdown'>
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

export default FilterDropDown