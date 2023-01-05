import React from "react";
import { Button, Card } from "react-bootstrap";
import { DetailRecibo } from "..";
import { CompleteRecibo } from "../../iu/Buttons/CompleteRecibo";
import { PrintReceipt } from "../../printReceipt/PrintReceipt";

export const CarBody = ({ receipt, uploadVoucher, setRefresh,deleteReceipt }) => {
  return (
    <>
      {receipt.state && <Card.Img variant="buttom" src={receipt.urlVoucher} />}
      <Card.Body>
        <Card.Title className="text-center">{receipt.typeReceipt}</Card.Title>
        <div className="row justify-content-center">
          <DetailRecibo viewState={true} receipt={receipt} />
          <div className="row">
            <div className="col text-center ">
              {" "}
              <PrintReceipt recibo={receipt} />
            </div>
            <div className="col text-center">
             
                <CompleteRecibo
                  uploadVoucher={uploadVoucher}
                  setRefresh={setRefresh}
                  stateReceipt={receipt.state}
                />
         
             
            </div>
            <div className="col text-center">
              <Button onClick={deleteReceipt} variant="danger">Eliminar</Button>
              </div>
          </div>
        </div>
      </Card.Body>
    </>
  );
};
