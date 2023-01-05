import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";
import { DetailRecibo } from "../DetailRecibo";
import { ComponetToPrint } from "./ComponentToPrint";

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
          <DetailRecibo viewState={false} receipt={recibo}/>
        </ComponetToPrint>
      </div>
    </>
  );
};
