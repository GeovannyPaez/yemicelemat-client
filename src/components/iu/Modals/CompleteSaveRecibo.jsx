import { useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useReceiptApi } from "../../../hooks/useReceiptApi";
import { PrintReceipt } from "../../printReceipt/PrintReceipt";
import { BodyDetailReceiptModal } from "./BodyDetailReceiptModal";
function CompleteSaveRecibo(props) {
  const navigate = useNavigate();
  const [{ receipt, loading }, { saveReceiptApi, setLoading }] =
    useReceiptApi();
  const onSaveReceipt = async () => {
    setLoading(false);
    await saveReceiptApi(props.receipt);
    props.form.current.reset();
  };
  const onViewDetails = () =>
    navigate(
      "/view-recibo/" + receipt.typeReceipt.toLowerCase() + "-" + receipt.id
    );

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {!receipt ? (
        <BodyDetailReceiptModal receipt={props.receipt} />
      ) : (
        <BodyDetailReceiptModal receipt={receipt} />
      )}
      <Modal.Footer>
        {!receipt ? (
          <>
            <Button onClick={onSaveReceipt}>
              {loading ? (
                " Enviar "
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Button>
            <Button variant="secondary" onClick={props.onHide}>Rectificar</Button>
          </>
        ) : (
          <>
            <Button onClick={onViewDetails}>Ver Recibo</Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export { CompleteSaveRecibo };
