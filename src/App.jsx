import React, { useEffect, useState } from 'react';
import TopNavbar from './Components/TopNavbar';
import Sidebar from './Components/Sidebar';
import "./App.css"
import AgentList from "./Components/AgentList";
import AgentContextProvider from './Context/AgentContextProvider';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [showAgentList, setShowAgentList] = useState(false); 


    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSuperAgentClick = () => {
        setShowAgentList(prevState => !prevState); // Toggle the state
    };
    
    return (
        <AgentContextProvider>
            <div className='d-flex'>
                <div className='h-full'>
                <Sidebar onSuperAgentClick={handleSuperAgentClick} />
                </div>
                <div className='w-full'>
                    <TopNavbar />
                    {showAgentList && <AgentList />}
                </div>


            </div>
        </AgentContextProvider>
    );
}

export default App;