import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sessionUser, setSessionUser] = useState(user);
  const [localUser, setLocalUser] = useState(user);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const login = (data) => {
    toast.success('Logged in successfully')
    const userData = data.Values[0]
    console.log('This is device login user data', userData)
    setUser(userData)
    setLocalUser(userData)
    sessionStorage.setItem('user', JSON.stringify(data.Values[0]));
    localStorage.setItem('user', JSON.stringify(data.Values[0]));
    navigate("/")
    console.log('login is working')
  };

  const logout = () => {
    // Clear user data from state and session storage
    console.log('userIs', user)
    setUser(null);
    setSessionUser(null);
    setLocalUser(null);
    navigate('/login')
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    console.log('after Log out, local user data is :', localUser)
  };


  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const storedLocalUser = localStorage.getItem('user');
    const userObject = JSON.parse(storedUser);
    const userLocalObject = JSON.parse(storedLocalUser);
    console.log(storedLocalUser)
    setSessionUser(userObject)
    setLocalUser(userLocalObject)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, isLoading, setIsLoading, sessionUser, setSessionUser, setLocalUser, localUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
