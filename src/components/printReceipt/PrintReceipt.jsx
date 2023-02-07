import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";
import { DetailRecibo } from "../DetailRecibo";
import { ComponetToPrint } from "./ComponentToPrint";
import { DetailRetiro } from "../DetailRetiro";
export const PrintReceipt = ({ recibo }) => {
  let componeteRef = useRef();
  return (
    <>
      <div>
        <ReactToPrint
          trigger={() => <Button>Imprimir</Button>}
          content={() => componeteRef}
        />
      </div>

      <div style={{ display: "none" }}>
        <ComponetToPrint ref={(el) => (componeteRef = el)}>
        {recibo.typeReceipt.toLowerCase() ==  "retiros" ? (
            <DetailRetiro receipt={recibo}  viewState={false}/>
          ) : (
            <DetailRecibo receipt={recibo} viewState={false} />
            
          )}
        </ComponetToPrint>
      </div>
    </>
  );
};
