import React, { useContext, useEffect, useRef } from "react";
import Formulario from "./Formulario";

import { Button } from "react-bootstrap";
import { CompleteSaveRecibo } from "../Modals/CompleteSaveRecibo";

import { Selects } from "./Selects";
import { UserContext } from "../../../context/userContext";
import { useState } from "react";

export default function Form() {
  const [receiptNew, setReceiptNew] = useState(null);
  const { token, logout } = useContext(UserContext);
  const [typeRecibo, setTypeRecibo] = React.useState("Celular");
  const [modalShow, setModalShow] = React.useState(false);

  if (!token) {
    logout();
  }
  const form = useRef(null);
  const newOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);
    setReceiptNew(data);
    setModalShow(true);
  };
  return (
    <>
      {receiptNew && (
        <CompleteSaveRecibo
          show={modalShow}
          form={form}
          onHide={() => setModalShow(false)}
          receipt={receiptNew}
        />
      )}

      <div className="container">
        <form ref={form} className="mt-4 w-100" onSubmit={newOnSubmit}>
          <div className="col">
            <div className="form-floating mb-3">
              <Selects
                arrayValues={arraySelects}
                id="TypeRecibo"
                name={"typeReceipt"}
                onChange={setTypeRecibo}
              />
              <label htmlFor="TypeRecibo">Tipo de Recibo</label>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                type="number"
                name="numPhone"
                className="form-control"
                id="numCelular"
                placeholder="3125525555"
                maxLength={10}
              />
              <label htmlFor="numCelular">Numero Celular</label>
            </div>
            <Formulario type={typeRecibo} />
            <div className="form-floating mb-3">
              <input
                required
                type="number"
                name="value"
                className="form-control"
                id="valorPagar"
                placeholder="valorPagar"
              />
              <label htmlFor="valorPagar">Valor a Pagar</label>
            </div>
            <div className="form-floating mb-3">
              <input
                required
                type="number"
                name="comicion"
                className="form-control"
                id="comicion"
                placeholder="comicion"
              />
              <label htmlFor="comicion">Comición</label>
            </div>
            <Button type={"submit"} variant="secondary">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

const arraySelects = [
  "Celular",
  "Pines",
  "Freefire",
  "Consignaciones",
  "Giros",
  "Venezuela",
];
