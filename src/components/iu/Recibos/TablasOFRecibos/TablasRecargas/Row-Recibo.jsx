import React from 'react'
import { useNavigate } from 'react-router-dom'

export const RowRecibo = ({children , id,type}) => {

    const navigate=useNavigate();
    const onView=()=>{
        navigate('/view-recibo/'+type+'-'+id)
    }
  return (
    <tr onClick={onView} key={id}>
        {children}
    </tr>
    
  )
}
