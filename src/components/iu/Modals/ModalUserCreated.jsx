import { Modal,Button } from "react-bootstrap";



function ModalUserCreated(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Informacion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Usuario ha sido creado con los datos que ingresaste</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export {ModalUserCreated}