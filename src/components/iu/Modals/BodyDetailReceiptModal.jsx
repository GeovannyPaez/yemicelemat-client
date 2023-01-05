import React from "react";
import { Modal,Button } from "react-bootstrap";
import { DetailRecibo } from "../../DetailRecibo";
export const BodyDetailReceiptModal = ({receipt }) => {
    
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Información del Recibo: 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DetailRecibo receipt={receipt}/>
      </Modal.Body>
      
    </>
  );
};
