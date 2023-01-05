import React from 'react'

export const BodyVenezuela = ({recibo}) => {
  return (
    <>
        <p><strong>Nombre Remitente: </strong>{recibo.nameRemitente}</p>
        <p><strong>CC Remitente </strong>{recibo.ccRemitente}</p>
        <p><strong>Nombre Receptor: </strong>{recibo.nameReceptor}</p>
        <p><strong>CC Receptor: </strong>{recibo.ccReceptor}</p>
        <p><strong>Tipo Documento: </strong>{recibo.typeDocument}</p>
        <p><strong>Destino : </strong>{recibo.destino}</p>
        <p><strong>Numero Cuenta:  </strong>{recibo.numAccount}</p>
        <p><strong>Banco: </strong>{recibo.bench}</p>
        <p><strong>Tipo Cuenta: </strong>{recibo.typeAccount}</p>
    </>
  )
}
