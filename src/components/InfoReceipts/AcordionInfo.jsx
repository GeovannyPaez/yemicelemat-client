import React from 'react'
import { Accordion,Card,ListGroup, Spinner } from 'react-bootstrap'
import { changeNumberToMoney } from '../../services/chageNumberToMoney';

export const AcordionInfo = ({ infoReceipts,loading}) => {
    const {sumComicion,sumTotal,sumVentas} = infoReceipts;
    if(loading) return <Spinner variant='border'/>
  return (
    <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="1"  >
      <Accordion.Header>Informacion General</Accordion.Header>
      <Accordion.Body>
      <Card  >
      <ListGroup variant="flush">
        <ListGroup.Item>Ganancias: <strong>{changeNumberToMoney(sumComicion)}</strong> </ListGroup.Item>
        <ListGroup.Item>Ventas: <strong>{changeNumberToMoney(sumVentas)}</strong> </ListGroup.Item>
        <ListGroup.Item>Dinero Total: <strong>{changeNumberToMoney(sumTotal)}</strong></ListGroup.Item>
      </ListGroup>
    </Card>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}
