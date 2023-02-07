import React from "react";

export const Retiros = () => {
  return (
    <>
      <div className="form-floating mb-3">
        <select
          className="form-select"
          name="bench"
          aria-label="Floating label select example"
        >
          <option value="Bancolombia">Bancolombia</option>
          <option value="DaviPlata">DaviPlata</option>
          <option value="Nequi">Nequi</option>
          <option value="Bogotá">Bogotá</option>
        </select>
        <label htmlFor="bench">Banco</label>
      </div>
      <div className="form-floating mb-3">
        <input
          required
          type="number"
          className="form-control"
          name="numberReceipt"
          placeholder="653511615"
        />
        <label htmlFor="numberReceipt">Numero Del Recibo</label>
      </div>
      <div className="form-floating mb-3">
        <input
          required
          type="number"
          className="form-control"
          name="totalReceived"
          placeholder="200000"
        />
        <label htmlFor="totalReceived">Total Recibido</label>
      </div>

      <div className="form-floating mb-3">
        <input
          required
          type="number"
          className="form-control"
          name="totalDelivered"
          placeholder="180000"
        />
        <label htmlFor="totalDelivered">Total Entregado</label>
      </div>
    </>
  );
};
