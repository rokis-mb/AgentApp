import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sessionUser, setSessionUser] = useState(user);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const login = () => {
    // sessionStorage.setItem('user', JSON.stringify(user));
    // console.log('login is working')
    // navigate("/")
    // console.log('userIs', user)
  };

  const logout = () => {
    // Clear user data from state and session storage
    console.log('userIs', user)
    setUser(null);
    navigate('/login')
    sessionStorage.removeItem('user');
  };


  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const userObject = JSON.parse(storedUser);
    console.log(userObject)
    setSessionUser(userObject)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, isLoading, setIsLoading, sessionUser, setSessionUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
