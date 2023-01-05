import React from 'react'
import { Button ,Nav} from 'react-bootstrap'
import { useUserData } from '../../../hooks/useUserData'

export const NavNotLogueado = () => {
  return (
    <Nav>
      <Nav.Link href="#/login">
        <Button variant='primary'>
            Iniciar sección
        </Button>
      </Nav.Link>
    </Nav>
  )
}
