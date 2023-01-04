import React, { useState, createContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(true);

  return <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
