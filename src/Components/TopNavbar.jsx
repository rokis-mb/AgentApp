import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSidebarContext } from '../Context/SidebarContext';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell, faTh } from '@fortawesome/free-solid-svg-icons'; // Import the faTh (waffle) icon
import Image from 'react-bootstrap/Image';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../Context/UserProvider';


import '../CSS/TopNavbar.css'
import SearchBox from './SubComponents/SearchBox';


const TopNavbar = () => {
    
    const {user, logout} = useContext(UserContext);
    const { setSidebarOpen, sidebarOpen } = useSidebarContext();
    const [searchValue, setSearchValue] = useState('');
    // const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(prevState => !prevState);
        console.log(sidebarOpen)
    };


    return (
        <Navbar expand="md" className={`bg-body-transparent nav-py zIndex nav-pl ${sidebarOpen ? "navbar-open" : "navbar-close"}`}>
            <Container fluid>
                <div className='d-flex nav-title'>
                    <FontAwesomeIcon icon={faBars} className="toggle-button" onClick={handleSidebarToggle} />
                    <Navbar.Brand className='nav-logo' href="#">
                            <img className='logo-img' src="https://basobashappyhomes.com/static/media/logo.7c96b30bb1e0b7346f3b.png" alt="Logo" />
                        
                        <div className='logo-text-container'>Basobas Happy Homes Pvt. Ltd</div>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className={`justify-content-between  `}>
                    <Form className="d-flex">
                        <SearchBox />
                    </Form>
                    <Nav className="ms-auto">
                        <Nav.Link href="#cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Nav.Link>
                        <Nav.Link href="#notification">
                            <FontAwesomeIcon icon={faBell} />
                        </Nav.Link>
                        <NavDropdown title={<FontAwesomeIcon icon={faTh} />} id="navbarScrollingDropdown" drop="right" align="end">
                            <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">
                                Action 2
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<div className="profile-picture"><Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile" fluid /></div>} id="profileDropdown" drop="left" align="end">
                            {/* <NavDropdown.Item href="#Set-Status">Set Status</NavDropdown.Item>
                            <NavDropdown.Item href="#Profile-and-Account">Profile and Account</NavDropdown.Item>
                            <NavDropdown.Item href="#Feedback">Feedback</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item> */}
                            <NavDropdown.Item onClick={()=>logout()}>LogOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
