import React from "react";
import { useContext } from "react";
import { Nav,  NavDropdown,Button} from "react-bootstrap";
import { useUserData } from "../../../hooks/useUserData";
import ButtomViewForm from "../Buttons/ButtomViewForm";
export const NavLogueado = ({onLogout}) => {
  const [{user}]= useUserData();
  return (
    <Nav>
      <NavDropdown title="Recargas" id="basic-nav-dropdown">
        <NavDropdown.Item href="#/recibos/celular" >
          Recargas Celular
        </NavDropdown.Item>
        <NavDropdown.Item href="#/recibos/freefire" >
          FreeFire
        </NavDropdown.Item>
        <NavDropdown.Item href="#/recibos/pines">
          Pines
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Consignaciones" id="basic-nav-dropdown">
        <NavDropdown.Item href="#/recibos/consignaciones" >
          Consignaciones
        </NavDropdown.Item>
        <NavDropdown.Item href="#/recibos/retiros">
          Retiros
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#/recibos/giros">Giros</Nav.Link>
      <Nav.Link eventKey={2} href="#/recibos/venezuela">
        Venezuela
      </Nav.Link>
      {!user.admin ? <Nav.Link href="#/add-recibo">
        <ButtomViewForm />
      </Nav.Link>: <Nav.Link href="#/add-retiro">
          <Button>Crear Retiro</Button>
        </Nav.Link>}
      <NavDropdown title={user.nickname} id="basic-nav-dropdown">
      {user.admin &&<NavDropdown.Item href="#/registro" >
            <Button variant='primary'>
                Crear Usuario
            </Button>
        </NavDropdown.Item>}
        <NavDropdown.Item href="#/" >
            <Button variant='danger' onClick={onLogout}>
                Cerrar Sección
            </Button>
        </NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    

  );
};
