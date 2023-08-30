import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidebarContext } from '../Context/SidebarContext';
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

const CustomSidebar = () => {
    const { setSidebarOpen, sidebarOpen } = useSidebarContext();
    const sidebarItems = [
        { icon: faHome, title: 'Home' },
        { icon: faUserSecret, title: 'Super Agent' },
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
        <div className={`custom-sidebar ${sidebarOpen ? 'open' : ''}`}>
            {console.log(sidebarOpen)}
            <div className="sidebar-content">
                <ul className="sidebar-list">
                    {sidebarOpen ? (
                        sidebarItems.map((item, index) => (
                            <li key={index} className="sidebar-item">
                                <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
                                <span className="sidebar-title">{item.title}</span>
                            </li>
                        ))
                    ) : (
                        sidebarItems.map((item, index) => (
                            <li key={index} className="sidebar-item">
                                <FontAwesomeIcon icon={item.icon} className="sidebar-icon-only" />
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};



export default CustomSidebar;
