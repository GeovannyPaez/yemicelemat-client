import React from "react";
import { BodyCelular } from "./bodyRecargas/BodyCelular";
import { BodyFreefire } from "./bodyRecargas/BodyFreefire";
import { BodyPines } from "./bodyRecargas/BodyPines";
import { BodyVenezuela } from "./bodyVenezuela";
import { BodyConsignaciones } from "./bodyConsignaciones";
import { BodyGiros } from "./bodyGiros";
import { changeNumberToMoney } from "../../services/chageNumberToMoney";
import parseDate from "../../services/formatToDate";

export const DetailRecibo = ({ receipt, viewState }) => {
  const values = returnBodyRecibo(receipt);
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
          <strong>Telefono: </strong>
          {receipt.numPhone}
        </p>
        {values}
        {receipt.date && <p>
          <strong>Fecha: </strong>
          {parseDate(receipt.date)}
        </p>}
        {viewState && (
          <p>
            <strong>Estado: </strong>
            {receipt.state ? "Completado" : "Pendiente"}
          </p>
        )}
        <p>
          <strong>Valor Neto: </strong>
          {changeNumberToMoney(Number(receipt.value))}
        </p>
        <p>
          <strong>Conmición: </strong>
          {changeNumberToMoney(Number(receipt.comicion))}
        </p>
        <p>
          <strong>Total Pagar: </strong>
          {changeNumberToMoney(Number(receipt.value) + Number(receipt.comicion))}
        </p>
      </div>
    </div>
  );
};

//validamos que tipo de keys retornamos para el recibo;

//values de las keys
const returnBodyRecibo = (recibo) => {
  switch (recibo.typeReceipt) {
    case "Celular":
      return <BodyCelular recibo={recibo} />;
    case "Pines":
      return <BodyPines recibo={recibo} />;
    case "Freefire":
      return <BodyFreefire recibo={recibo} />;

    case "Consignaciones":
      return <BodyConsignaciones recibo={recibo} />;
    case "Giros":
      return <BodyGiros recibo={recibo} />;
    case "Venezuela":
      return <BodyVenezuela recibo={recibo} />;
    default:
      console.log("no existe todavia ese tipo");
      break;
  }
};
