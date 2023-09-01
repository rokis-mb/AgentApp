import React, { useState } from 'react';
import TopNavbar from './Components/TopNavbar';
import { SidebarProvider } from './Context/SidebarContext'
import "./App.css"
import AgentList from "./Components/AgentList";
import AgentContextProvider from './Context/AgentContextProvider';
import CustomSidebar from './Components/CustomSidebar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';

library.add(fas);

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <AgentContextProvider>
            <SidebarProvider>
                <div className='app-container'>
                    <CustomSidebar isOpen={sidebarOpen} />
                    <div className={`${sidebarOpen? "main-content main-content-open" : "main-content"}`}>
                            <TopNavbar />
                        <div className='content-container'>
                            {/* <CustomNavbar /> */}
                            <div>
                                <Routes>
                                    <Route path="/SuperAgent" element={<AgentList />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </AgentContextProvider>
    );



}

export default App;
