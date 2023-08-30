import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidebarContext } from '../Context/SidebarContext';
import Navbar from 'react-bootstrap/Navbar';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
    faHome,
    faUserSecret,
    faCalendar,
    faComments,
    faEnvelope,
    faCalendarDay,
    faGlobe,
    faLock,
    faTags,
    faCogs,
} from '@fortawesome/free-solid-svg-icons';


import '../CSS/CustomSidebar.css';
import { useNavigate } from 'react-router-dom';

const CustomSidebar = () => {
    const { setSidebarOpen } = useSidebarContext();

    const navigate = useNavigate();
    const handleSidebarToggle = () => {
        setSidebarOpen(prevState => !prevState);
        console.log(sidebarOpen)
    };
    const { sidebarOpen } = useSidebarContext();
    const sidebarItems = [
        { icon: faHome, title: 'Home', onclick: () => navigate("/") },
        { icon: faUserSecret, title: 'Super Agent', onclick: () => navigate("/SuperAgent") },
        { icon: faCalendar, title: 'Calendar' },
        { icon: faComments, title: 'Chat' },
        { icon: faEnvelope, title: 'Email' },
        { icon: faCalendarDay, title: 'Events' },
        { icon: faGlobe, title: 'Landing' },
        { icon: faLock, title: 'Authentication' },
        { icon: faTags, title: 'Pricing' },
        { icon: faCogs, title: 'Settings' },
    ];

    return (
        <div className={` ${sidebarOpen ? 'navbar-container-open' : 'navbar-container'}`}>
            <div className='d-flex nav-title'>
                <FontAwesomeIcon icon={faBars} className="toggle-button" onClick={handleSidebarToggle} />
                <Navbar.Brand className='nav-logo' href="#">LOGO</Navbar.Brand>
            </div>
            <div className={`custom-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <ul className="sidebar-list">
                        {sidebarOpen ? (
                            sidebarItems.map((item, index) => (
                                <li key={index} className="sidebar-item" onClick={item.onclick}>
                                    <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
                                    <span className="sidebar-title">{item.title}</span>
                                </li>
                            ))
                        ) : (
                            sidebarItems.map((item, index) => (
                                <li key={index} className="sidebar-item" onClick={item.onclick}>
                                    <FontAwesomeIcon icon={item.icon} className="sidebar-icon-only" />
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};



export default CustomSidebar;
