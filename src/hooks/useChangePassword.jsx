
import { useState } from 'react';
import { useEffect } from 'react';
import AuthServices from '../services/authServices'
const services = new AuthServices();
export const useChangePassword = (token) => {
    const [loading,setLoading]= useState(false);
    const [alert,setAlert]= useState(false);
    const [email,setEmail]= useState(null);
    const [error,setError]= useState(false);
    const [ newPassowrd,setNewPassword]= useState(null);
    
    useEffect(()=>{
       if( !email ) return;
        (async()=>{
            try {
                // console.log(email)
                const res = await services.recoveryPassword(email)
                if(res.statusCode == 401){
                    setError(true);
                    setLoading(false)
                    
                } else{
                    
                        setLoading(false);
                        setAlert(true)
                        setError(false)
                
                }
                // setAlert(true)
                // console.log(res)
            // console.log(res)
            } catch (error) {
                setError(true)
                console.log(error)
            }
        })();
    },[email])
    useEffect(()=>{
        if(!newPassowrd) return;
       (async()=>{
        try {
            
            const res = await services.changePassword(newPassowrd,token);
            if(res.statusCode > 400) {
                setError(true);
                setLoading(false);
            }else {
                setLoading(false)
                setAlert(true);
                setError(false);
            }
        } catch (err) {
            console.log(err);
        }
       })();
    },[newPassowrd])
    const sendEmail= (email)=>{
        setLoading(true),
        setEmail(email)
    }
    const changePassword=(newPassowrd)=>{
        setLoading(true);
        setNewPassword(newPassowrd);
    }
  return (
    [{email,alert,error,loading},{sendEmail,changePassword}]
  )
}
