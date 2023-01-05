import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthServices from "../services/authServices";
import useLocalStorage from "./useLocalStorageOne";
const authService = new AuthServices();


export const useToken = () => {
  const [item, { saveLocalStorage, cleanLocalStorage }] = useLocalStorage(
    "tokenLoginUser",
    ""
  );
  const navigate  = useNavigate();
  const token = item;
  const login = async ({ password, email }) => {
 
      const data = await authService.login({ password, email });
      if (data.statusCode === 401){
        return true;
      } else{
        saveLocalStorage(data.token);
        return false;
      }
  };
  const logout = () => {
    cleanLocalStorage();
    navigate('/login')
  };
  return [token, { login, logout }];
};
