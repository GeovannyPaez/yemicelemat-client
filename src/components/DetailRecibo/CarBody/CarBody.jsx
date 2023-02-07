import React from "react";
import { Button, Card } from "react-bootstrap";
import { DetailRecibo } from "..";
import { useUserData } from "../../../hooks/useUserData";
import { DetailRetiro } from "../../DetailRetiro";
import { CompleteRecibo } from "../../iu/Buttons/CompleteRecibo";
import { PrintReceipt } from "../../printReceipt/PrintReceipt";

export const CarBody = ({
  receipt,
  uploadVoucher,
  setRefresh,
  deleteReceipt,
}) => {
  console.log(receipt.typeReceipt.toLowerCase());
  const [{ user }] = useUserData();

  const InfoReceipt = () => {
    receipt.typeReceipt.toLowerCase() === "retiros" ? (
      <DetailRetiro receipt={receipt} />
    ) : (
      <DetailRecibo receipt={receipt} />
    );
  };

  return (
    <>
      {receipt.state && (
        <div className="img-detail-receipt">
          <Card.Img variant="buttom" src={receipt.urlVoucher} />
        </div>
      )}
      <Card.Body>
        <Card.Title className="text-center">{receipt.typeReceipt}</Card.Title>
        <div className="row justify-content-center">
          {/* <DetailRecibo receipt={receipt} /> */}
          {receipt.typeReceipt.toLowerCase() === "retiros" ? (
            // <p>siiii</p>
            <DetailRetiro receipt={receipt} />
          ) : (
            <DetailRecibo receipt={receipt} />
          )}
          <div className="row container-buttoms">
            <div className="col text-center ">
              <PrintReceipt recibo={receipt} />
            </div>
            {user.admin && (
              <>
                <div className="col text-center">
                  <CompleteRecibo
                    uploadVoucher={uploadVoucher}
                    setRefresh={setRefresh}
                    stateReceipt={receipt.state}
                  />
                </div>
                <div className="col text-center">
                  <Button onClick={deleteReceipt} variant="danger">
                    Eliminar
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </Card.Body>
    </>
  );
};
