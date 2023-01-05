import React from 'react'
import { Button } from 'react-bootstrap'

export const ButtonComplete = ({onClick, stateReceipt}) => {
  return (
    <Button variant='secundary' style={{backgroundColor: "GrayText",color:"white"}} onClick={onClick} title={stateReceipt?'Cambiar Comprobante':"Subir Comprobante"} value={'info'}>{stateReceipt?'Cambiar':"Completar"}</Button>
  )
}
