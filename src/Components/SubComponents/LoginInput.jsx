import '../../CSS/LoginInput.css'

const LoginInput = (props) => {
    return (
        <div className='my-login-input-container'>
            <input className="my-login-input"
            type={props.type} 
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            disabled={props.disabled}
            value={props.value}
            readOnly={props.readOnly}
            placeholder={props.placeholder}/>
        </div>
    )
}

export default LoginInput