import React from "react";
import { changeNumberToMoney } from "../../services/chageNumberToMoney";
import parseDate from "../../services/formatToDate";

export const DetailRetiro = ({ receipt, viewState }) => {
  return (
    <div className="row justify-content-center ">
      <div className="col-10  text-center">
        <p>
          <strong>id: </strong>
          {receipt.id}
        </p>
        <p>
          <strong>Tipo Recibo: </strong>
          {receipt.typeReceipt}
        </p>
        <p>
          <strong>Banco: </strong>
          {receipt.bench}
        </p>
        <p>
          <strong>Numero De Recibo: </strong>
          {receipt.numberReceipt}
        </p>
        {receipt.date && (
          <p>
            <strong>Fecha: </strong>
            {parseDate(receipt.date)}
          </p>
        )}
        {viewState && (
          <p>
            <strong>Estado: </strong>
            {receipt.state ? "Completado" : "Pendiente"}
          </p>
        )}
        <p>
          <strong>Total Recibido: </strong>
          {changeNumberToMoney(Number(receipt.totalReceived))}
        </p>
        <p>
          <strong>Total Entregado: </strong>
          {changeNumberToMoney(Number(receipt.totalDelivered))}
        </p>
        <p>
          <strong>Conmición: </strong>
          {changeNumberToMoney(Number(receipt.totalReceived)-Number(receipt.totalDelivered))}
        </p>
      </div>
    </div>
  );
};

//validamos que tipo de keys retornamos para el recibo;

//values de las keys