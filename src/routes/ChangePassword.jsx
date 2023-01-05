import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useChangePassword} from "../hooks/useChangePassword"
import { Form ,Button, Spinner, Alert} from "react-bootstrap";

export const ChangePassword = () => {
  const { token } = useParams();
  const navigate=useNavigate();
  const [passwords,setPasswords]= useState({newPassword:"", equalNewPassword:""});
  const [{loading,error,alert},{changePassword}]= useChangePassword(token);
  
  const onChangePassword=(e)=>{
    // console.log(e.target.name);
    const key= e.target.name;
    const newState={...passwords};
    newState[key]=e.target.value
    setPasswords(newState);

  }
  // console.log(passwords);

  const onSubmit=(e)=>{
    e.preventDefault();
    changePassword(passwords.newPassword);
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-md-6 ">
          <Form onSubmit={onSubmit}>
            <Form.Group  className="mb-3" controlId="newPassword">
              <Form.Label>Nueva Contraseña</Form.Label>
              <Form.Control required onChange={onChangePassword} name="newPassword" type="password" placeholder="Contraseña" />
              <Form.Text>Contraseña debe ser mayor a 6 caracteres y contener solo letras y numeros</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="equalNewPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control required onChange={onChangePassword} name="equalNewPassword" type="password" placeholder="Repetir Contraseña" />
            </Form.Group>
            {alert && <Alert>Contraseña fue cambiada correctamente, <Button onClick={()=>navigate('/login')}>Iniciar Sección</Button> </Alert>}
            {error && <Alert variant="danger">Ups, algo a fallado. intentalo de nuevo.
              </Alert>}
            <Button disabled={(passwords.newPassword === passwords.equalNewPassword && passwords.newPassword.length >=6)  ? false: true}  variant="primary" type="submit" >
              {loading ?<Spinner variant="boder"/>:"Cambiar"} 
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
