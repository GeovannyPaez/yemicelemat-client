import React from 'react'

export const BodyGiros = ({recibo}) => {
  return (
    <>
           <p><strong>Nombre Remitente: </strong>{recibo.nameRemitente}</p>
        <p><strong>CC Remitente </strong>{recibo.ccRemitente}</p>
        <p><strong>Nombre Receptor: </strong>{recibo.nameReceptor}</p>
        <p><strong>CC Receptor: </strong>{recibo.ccReceptor}</p>
        <p><strong>Destino : </strong>{recibo.destino}</p>
        <p><strong>Entidad : </strong>{recibo.entidad}</p>
    </>
  )
}
