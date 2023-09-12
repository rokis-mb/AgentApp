import { Button, Col, Container, Form, Row } from "react-bootstrap"
import LoginInput from "../SubComponents/LoginInput"
import { useState } from "react"
import '../../CSS/LoginPage.css'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import whatsapp from '../../PNG/whatsapp.png'
import logo from '../../PNG/Logo-edit.png'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);


  const iconStyles = {
    cursor: "pointer",
    border: "none",
    background: "none",
    opacity: 0.7, // Adjust opacity as needed

  };

  return (
    <div className="main-login-container">
      <div className="white-container layer-1">
        <div>
          <Container className="login-form-container">
            <Row >
              <Col md={6} className="login-logo-container">
                <div className="login-description-container">
                  <p>Basobas Happy Homes is the 1st and pioneering property Management Company founded in Nepal in the year 2074.</p>
                </div>
                <div className="login-logo-with-text">
                  <div className="login-logo-img-container">
                    <img className='login-logo-img' src={logo} alt="Logo" />
                  </div>
                  <div className="login-logo-text-container">
                    Basobas Happy Homes
                  </div>
                </div>
                <div className="login-social-media-container">
                  <img src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="" />
                  <img src="https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png" alt="" />
                  <img src={whatsapp} alt="" />
                </div>
              </Col>
              <Col md={6} className="login-form">
                <div className="login-title">Agent Login</div>
                <span className="form-title">Sign in</span>
                <div className="d-flex flex-column username-container">
                  <Form.Label>Username</Form.Label>
                  <LoginInput placeholder='Enter your username' type='text' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="d-flex flex-column password-container">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <LoginInput
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="input-group-text"
                      onClick={() => setShowPassword(!showPassword)}
                      style={iconStyles}
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </span>

                  </div>
                </div>

                <Container>
                  <Row className="btn-row justify-content-center">
                    <Col md={5} >
                      <Button className='signInBtn' size="md">Sign in</Button>
                    </Col>
                    <Col md={5}>
                      <Button className='signUpBtn' size="md">Sign Up</Button>
                    </Col>
                  </Row>
                </Container>
                <p className="elite-infotech">By Elite Infotech</p>

              </Col>

            </Row>
          </Container>
        </div>
      </div>

    </div>
  )
}

export default LoginForm
