import { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import LoginPage from './Components/Login/LoginPage'

library.add(fas);

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<MainRoutes />} />
        </Routes>
    );



}

export default App;
