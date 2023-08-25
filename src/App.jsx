import React, { useState } from 'react';
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

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <AgentContextProvider>
            <div className='d-flex'>
                <div className='h-full'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <TopNavbar searchValue={searchValue} handleSearchChange={handleSearchChange} />
                    <AgentList />
                </div>


            </div>
        </AgentContextProvider>
    );
}

export default App;