import React from "react";
import { Accordion, Card, ListGroup, Spinner } from "react-bootstrap";
import { changeNumberToMoney } from "../../services/chageNumberToMoney";

export const AccordionInfoRetiros = ({ infoReceipts, loading }) => {
  const { sumComicion, sumReceived, sumDelivered } = infoReceipts;
    // console.log(infoReceipts,'infoReceipts')
  if (loading) return <Spinner variant="border" />;
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="1">
        <Accordion.Header color="">Informacion General</Accordion.Header>
        <Accordion.Body>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Ganancias: <strong>{changeNumberToMoney(sumComicion)}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Dinero Recibido:{" "}
                <strong>{changeNumberToMoney(sumReceived)}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Dinero Entregado:{" "}
                <strong>{changeNumberToMoney(sumDelivered)}</strong>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
