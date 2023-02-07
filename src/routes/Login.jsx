import React, { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const Form = useRef(null);
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [loading,setLoading]=useState(false);
  const onSutbmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(Form.current);
    const data = Object.fromEntries(formData);

    const res = await login(data);
    if (!res) {
      navigate("/recibos/celular");
      setLoading(false)
    } else {
      setLoading(false)
      setError(res);
    }
  };
  const onRecoveryPassword=()=>{
    navigate('/recovery-password');
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-7 m-auto">
          <form ref={Form} onSubmit={onSutbmit}>
            <div className="form-floating mb-3">
              <input
                required
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="e-mail"
                // defaultValue={'yupabon@gmail.com'}
              />
              <label htmlFor="email">Email</label>
              
            </div>
            <div className="form-floating mb-3"  >
            <input
                required
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="passwrod"
                // defaultValue={'admin123'}
              />
              <label htmlFor="password">Password</label>
            </div>
            {error && (
              <>
              <Alert variant="danger" className="text-center">Email o Contraseña incorrecta</Alert>
              <div className="col text-center"><Alert.Link variant='secundary' onClick={onRecoveryPassword}>¿Olvidaste tu contraseña?</Alert.Link></div>
              </>
            )}
            <div className="col mt-4 text-center">
            <button type="submit" className="btn btn-primary">
             {loading? <Spinner variant="border"/>:"Enviar"}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
