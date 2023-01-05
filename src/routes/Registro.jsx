import React, { useEffect, useRef, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ModalUserCreated } from "../components/iu/Modals/ModalUserCreated";
import { useUserData } from "../hooks/useUserData";

export const Registro = () => {
  const Form= useRef(null);
  const [{userCreated,error},{createUser,onHideModalUserCreated}]= useUserData();
  const [loading,setLoading]= useState(false);
  const [inputPassword,setInputPassword]= useState('')
  const onSutbmit=(e)=>{
      setLoading(true)
      e.preventDefault();
      const formData = new FormData(Form.current)
      const data = Object.fromEntries(formData);
      if(data.password.length < 6){
        setLoading(false);
        return;
      }
      createUser(data).then(()=>setLoading(false))
  }
  const onValidatePassword=(e)=>{
    setInputPassword(e.target.value)
  }
  return (
   <>
   <ModalUserCreated onHide={onHideModalUserCreated} show={userCreated}/>
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col col-md-6">
          <form ref={Form} onSubmit={onSutbmit}>
          <div className="mb-3">
              <label htmlFor="nickname" className="form-label">
                Nombre Usuario
              </label>
              <input
              required
                type="text"
                className="form-control"
                id="nickname"
                name="nickname"
                placeholder="Maria Hernandez"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control mb-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                required
                placeholder="mariahernadz@email.com"
              />
              {error == 409 && <Alert variant="danger">Email ya ha sido registrado, intenta con otro.</Alert>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
              onChange={onValidatePassword}
              required
                type="password"
                className="form-control mb-4"
                id="exampleInputPassword1"
                value={inputPassword}
                name="password"
                placeholder="contraseña debe ser mayor a 6 caracteres"
              />
               {(inputPassword.length < 6 && inputPassword.length> 1 )&& <Alert variant="danger">Contraseña debe ser mayor a 6 caracteres.</Alert>}
            </div>
            
            <button type="submit" className="btn btn-primary">
              {!loading ? 'Enviar':<Spinner animation="border" />}
            </button>
          </form>
        </div>
      </div>
    </div>
   
   </>
  );
};
