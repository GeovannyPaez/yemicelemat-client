import React, { useContext, useEffect, useRef } from "react";

import { Retiros } from "./Categories/Retiros";
import { Button } from "react-bootstrap";
import { CompleteSaveRecibo } from "../Modals/CompleteSaveRecibo";

import { Selects } from "./Selects";
import { UserContext } from "../../../context/UserContext";
import { useState } from "react";

export default function FormRetiros() {
  const [receiptNew, setReceiptNew] = useState(null);
  const { token, logout } = useContext(UserContext);
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
            <div  className="form-floating mb-3">
              <Selects
                arrayValues={arraySelects}
                id="TypeRecibo"
                name={"typeReceipt"}
              />
              <label htmlFor="TypeRecibo">Tipo de Recibo</label>
            </div>
            <Retiros />
            <Button type={"submit"} variant="secondary">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

const arraySelects = ["Retiros"];
