import React, { useEffect } from 'react'


export default function useLocalStorage(key,initialValue) {
    const getItem=()=>{
        let storage = localStorage.getItem(key);
        
        if(!storage || storage === "undefined"){
            localStorage.removeItem(key)
            return null 
        }else{
            storage=JSON.parse(storage);
            return storage;
        }
       
    }
    const [item, setItem]= React.useState(getItem() || initialValue);
   
    const saveLocalStorage=(item)=>{
        localStorage.setItem(key,JSON.stringify(item));
        setItem(item);
    }
    const cleanLocalStorage=()=>{
        localStorage.removeItem(key)
        setItem(null)
    }
  return ([item,{saveLocalStorage,cleanLocalStorage }])
}
