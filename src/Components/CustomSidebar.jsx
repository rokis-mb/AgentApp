import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidebarContext } from '../Context/SidebarContext';
import Navbar from 'react-bootstrap/Navbar';
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import Material-UI icon
import '../CSS/CustomSidebar.css';
import { useNavigate } from 'react-router-dom';

const CustomSidebar = () => {
    const { setSidebarOpen, sidebarOpen } = useSidebarContext();
    const navigate = useNavigate();

    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const sidebarItems = [
        { icon: faHome, title: 'Home', onclick: () => navigate('/') },
        { icon: faUserSecret, title: 'Super Agent', onclick: () => navigate('/SuperAgent') },
        { icon: faCalendar, title: 'Calendar' },
        { icon: faComments, title: 'Chat' },
        { icon: faEnvelope, title: 'Email' },
        {
            icon: faCalendarDay,
            title: 'Events',
            submenu: [
                { title: 'Event 1', onclick: () => navigate('/event1') },
                { title: 'Event 2', onclick: () => navigate('/event2') },
            ],
        },
        { icon: faGlobe, title: 'Landing' },
        { icon: faLock, title: 'Authentication' },
        { icon: faTags, title: 'Pricing' },
        {
            icon: faCogs,
            title: 'Settings',
            submenu: [
                { title: 'Option 1', onclick: () => navigate('/option1') },
                { title: 'Option 2', onclick: () => navigate('/option2') },
            ],
        },
    ];

    return (
        <div className="sidebar-container">
            <div className={` ${sidebarOpen ? 'navbar-container-open' : 'navbar-container'}`}>
                <div className={`custom-sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-content">
                        <ul className="sidebar-list">
                            {sidebarItems.map((item, index) => (
                                <li key={index} className="sidebar-item">
                                    <div className="sidebar-item-content" onClick={() => {item.submenu ? toggleSubmenu(index): item.onclick()}}>
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            className={sidebarOpen ? 'sidebar-icon' : 'sidebar-icon-only'}
                                        />
                                        {sidebarOpen && (
                                            <span className="sidebar-title">
                                                {item.title}
                                                {item.submenu && (
                                                    <KeyboardArrowDownIcon className="submenu-arrow" /> // Add the arrow icon here
                                                )}
                                                {item.submenu && openSubmenu === index && (
                                                    <div className="submenu submenu-open">
                                                        {item.submenu.map((subitem, subindex) => (
                                                            <li key={subindex} className="submenu-item" onClick={subitem.onclick}>
                                                                <div>{subitem.title}</div>
                                                            </li>
                                                        ))}
                                                    </div>
                                                )}
                                            </span>
                                        )}

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSidebar;
