import React from 'react'
import '../../CSS/TextArea.css'

const TextArea = (props) => {
    return (
        <div className='textarea-container'>
            <textarea className='my-textarea' name={props.name} rows={props.rows} onChange={props.onChange}>
                {props.defaultValue}
            </textarea>
        </div>
    )
}

export default TextArea
