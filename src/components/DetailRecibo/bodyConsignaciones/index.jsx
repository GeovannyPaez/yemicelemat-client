import React from "react";

export const BodyConsignaciones = ({ recibo }) => {
  return (
    <>
      <p>
        <strong>Nombre: </strong>
        {recibo.name}
      </p>
      <p>
        <strong>Numero Cuenta: </strong>
        {recibo.numAccount}
      </p>
      <p>
        <strong>Tipo de Cuenta: </strong>
        {recibo.typeAccount}
      </p>
      <p>
        <strong>Banco: </strong>
        {recibo.bench}
      </p>
    </>
  );
};
