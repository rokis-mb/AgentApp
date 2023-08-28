import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBell, faTh } from '@fortawesome/free-solid-svg-icons'; // Import the faTh (waffle) icon
import Image from 'react-bootstrap/Image';

import '../CSS/TopNavbar.css'

const TopNavbar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <Navbar expand="md" className="bg-body-tertiary nav-py">
            <Container fluid>
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 rounded-pill"
                            style={{ height: '38px', width: '300px' }}
                            value={searchValue}
                            onChange={handleSearchChange}
                            aria-label="Search"
                        />
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
                            <NavDropdown.Item href="#Set-Status">Set Status</NavDropdown.Item>
                            <NavDropdown.Item href="#Profile-and-Account">Profile and Account</NavDropdown.Item>
                            <NavDropdown.Item href="#Feedback">Feedback</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#LogOut">LogOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
