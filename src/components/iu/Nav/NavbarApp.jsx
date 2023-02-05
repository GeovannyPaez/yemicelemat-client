import React from 'react'
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../../../context/UserContext';
// import LogoLaCabaña from '../../logo';
import { ContainerLogo } from '../../logo/ContainerLogo';
import { NavLogueado } from './NavLogueado';
import { NavNotLogueado } from './NavNotLogueado';
export default function NavbarApp() {
  const {token,logout}=useContext(UserContext);
  const onLogout=()=> {
    logout();
  }
    return (
        <>
            <Navbar  collapseOnSelect expand="lg" bg='rose' variant='light'>
              <Container>
                <Navbar.Brand  href="#/"><ContainerLogo/></Navbar.Brand>
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
