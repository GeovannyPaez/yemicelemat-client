import React from 'react'
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../../../context/userContext';
import { NavLogueado } from './NavLogueado';
import { NavNotLogueado } from './NavNotLogueado';
export default function NavbarApp() {
  const {token,logout}=useContext(UserContext);
  const onLogout=()=> {
    logout();
  }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#/">YEMICELEMAT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                  {
                    token ? <NavLogueado onLogout={onLogout}/> :<NavNotLogueado/>
                  }
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </>
    )
}
