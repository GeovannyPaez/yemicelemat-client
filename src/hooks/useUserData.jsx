import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { UserServices } from '../services/userServices'

export const useUserData = () => {
    const navigate= useNavigate();
    const {token, logout}= useContext(UserContext)
    const [userCreated,setUserCreated]= useState(false)
    const User= new UserServices(token);
    const [error,setError]= useState()
    const  [user,setUser] = useState({});
    if(!token || error === 401){
        logout();
    };
    useEffect(()=>{
        if(!token || error === 401){
            logout()
            return;
        };
        (async()=>{
            try {
                const data = await User.getInfoUser();
                setUser(data.user)
            } catch (error) {
                setError(401)
            }
        })();
    },[token])
    const onHideModalUserCreated=()=> {
        setUserCreated(false)
        navigate('/')
    }
    const createUser=async(payload)=>{
        try {
            const res= await User.createUser(payload);
            if(res.hasOwnProperty('id')) {
                setUserCreated(true)
            }
            console.log(res)
            {res.statusCode  && setError(res.statusCode)}
        } catch (error) {
            setError(401)
        }
    }
    
  return (
   [{error, user, userCreated},{createUser,onHideModalUserCreated}]
  )
}
