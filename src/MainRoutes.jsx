import React, { useState } from 'react';
import TopNavbar from './Components/TopNavbar';
import { SidebarProvider } from './Context/SidebarContext'
import "./MainRoutes.css"
import AgentList from "./Components/Agent/AgentList";
import AgentContextProvider from './Context/AgentContextProvider';
import CustomSidebar from './Components/CustomSidebar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import PropertyList from './Components/Property/PropertyList';
import PropertyContextProvider from './Context/PropertyContextProvider';
import { UserProvider } from './Context/UserProvider';

library.add(fas);

const MainRoutes = () => {
    const [searchValue, setSearchValue] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
            <AgentContextProvider>
                <PropertyContextProvider>
                    <SidebarProvider>
                        <div className='app-container'>
                            <CustomSidebar isOpen={sidebarOpen} />
                            <div className={`${sidebarOpen ? "main-content main-content-open" : "main-content"}`}>
                                <TopNavbar />
                                <div className='content-container'>
                                    <div>
                                        <Routes>
                                            <Route path="/SuperAgent" element={<AgentList />} />
                                            <Route path="/Property" element={<PropertyList />} />
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SidebarProvider>
                </PropertyContextProvider>
            </AgentContextProvider>
    );



}

export default MainRoutes;
