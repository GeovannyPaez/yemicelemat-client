import React, { createContext } from "react";
import { useToken } from "../hooks/useToken";


export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, { login, logout }] = useToken();
  const values = {
    token,
    login,
    logout
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
