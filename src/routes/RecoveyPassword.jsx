import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { useChangePassword } from "../hooks/useChangePassword";

export const RecoveyPassword = () => {
  const [{ alert, loading, error }, { sendEmail }] = useChangePassword();
  const FormRecovery = useRef(null);
  const onHandleEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(FormRecovery.current);
    const data = Object.fromEntries(formData);
    sendEmail(data);
    e.target.reset();
  };
  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6  col-12">
          <Form ref={FormRecovery} onSubmit={onHandleEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico registrado</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="josefa@gmail.com"
              />
              <Form.Text className="text-muted">
                {alert ? (
                  <Alert className=" mt-1 mb-1" variant="info">
                    Email ha sido enviado
                  </Alert>
                ) : (
                  "Digite un correo valido, y te llegara un email con un link recuperacion."
                )}
              </Form.Text>
              {error && (
                <Alert variant="danger">Email no esta registrado.</Alert>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              {loading ? <Spinner variant="border" /> : "Enviar"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
