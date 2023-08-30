import React, { useEffect, useState } from 'react';
import TopNavbar from './Components/TopNavbar';
import { SidebarProvider } from './Context/SidebarContext'
import Sidebar from './Components/Sidebar';
import "./App.css"
import AgentList from "./Components/AgentList";
import AgentContextProvider from './Context/AgentContextProvider';
import CustomSidebar from './Components/CustomSidebar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showAgentList, setShowAgentList] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSuperAgentClick = () => {
        setShowAgentList(prevState => !prevState); // Toggle the state
    };

    return (
        <AgentContextProvider>
            <SidebarProvider>
                <div className='app-container'>
                    <TopNavbar />
                    <div className='main-content'>
                        <div className='content-container'>
                            <CustomSidebar isOpen={sidebarOpen} />
                            <div className='content'>
                                {showAgentList && <AgentList />}
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </AgentContextProvider>
    );



}

export default App;
