import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBDropDown,
    CDBDropDownItem,
    CDBDropDownMenu,
    CDBLink,
    CDBDropDownToggle,
    CDBContainer,
} from 'cdbreact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import '../CSS/Sidebar.css';

const Sidebar = () => {
    return (
        <CDBSidebar textColor="#F0FFFF" backgroundColor="linear-gradient(180deg, #0F52BA 100%, #0818A8 100%)">
            <CDBSidebarHeader prefix={<FontAwesomeIcon icon={faBars} />}></CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>

                    <div className='sidebar-divider'></div>

                    <CDBSidebarMenuItem icon="calendar">Calendar</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="comments" iconType="solid">Chat</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="envelope">Email</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="calendar-day">Events</CDBSidebarMenuItem>
                    {/* <CDBSidebarMenuItem icon="cart-shopping" iconType="solid">E Commerce</CDBSidebarMenuItem> */}
                    <CDBSidebarMenuItem icon="book" iconType="solid">E Learning</CDBSidebarMenuItem>
                    {/* <CDBSidebarMenuItem icon="credit-card" iconType="solid">Kanban</CDBSidebarMenuItem> */}
                    {/* <CDBSidebarMenuItem icon="person-arrows" iconType="solid">Social</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="circle-info" iconType="solid">Support Desk</CDBSidebarMenuItem> */}

                    <div className='sidebar-divider'></div>

                    <CDBSidebarMenuItem icon="globe" iconType="solid">Landing</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="lock">Authentication</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="calendar-day">Events</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="tags" iconType="solid">Pricing</CDBSidebarMenuItem>
                    {/* <CDBSidebarMenuItem icon="credit-card" iconType="solid">Faq</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="triangle-exclamation" iconType="solid">Errors</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="credit-card" iconType="solid">Miscelleneous</CDBSidebarMenuItem> */}
                </CDBSidebarMenu>
            </CDBSidebarContent>
        </CDBSidebar>
    );
};

export default Sidebar;
