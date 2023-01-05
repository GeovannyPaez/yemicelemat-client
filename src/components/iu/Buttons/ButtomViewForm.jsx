import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
export default function ButtomViewForm() {
    const navigate = useNavigate();
    const onViewForm=()=>{
        navigate('/add-recibo')
    }
    
  return (
    <Button variant="dark" 
    // onClick={onViewForm}
    >Nuevo Recibo</Button>
  )
}
