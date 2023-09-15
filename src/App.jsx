import { useContext, useEffect, useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import LoginPage from './Components/Login/LoginPage'
import UserContext, { UserProvider } from './Context/UserProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

library.add(fas);

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const { user, setUser, isLoading, setIsLoading, sessionUser, setSessionUser, setLocalUser, localUser } = useContext(UserContext);
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    // async function checkSession() {
    //     setIsLoading(true)
    //     try {
    //         const res = await fetch("https://testing.esnep.com/happyhomes/api/agent/check-session", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Signature": "p0m76"
    //             },
    //             body: JSON.stringify({
    //                 "UserID": user.UserID + '',
    //                 "NotToken": "abc",
    //                 "Device": "A",
    //                 "AuthCode": "r1d3r"
    //             })
    //         })
    //         const data = await res.json()
    //         console.log('the received values:', data.Values[0])
    //         setSessionUser(data.Values[0]);
    //     } catch (error) {
    //         console.log(error)
    //     } finally {

    //         setIsLoading(false)
    //     }

    // }

    // useEffect(() => {
    //     checkSession();
    // }, [])
    console.log('App Local:', localUser)

    return (
        <>
            <ToastContainer position="top-right" pauseOnHover={false} />
            <Routes>
                {!localUser ? (
                    <Route path="/login" element={<LoginPage />} />
                ) : (
                    <Route path="/*" element={<MainRoutes />} />
                )}
            </Routes>
        </>

    );



}

export default App;
