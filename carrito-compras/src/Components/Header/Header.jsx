import React, { useContext } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Cart } from 'react-bootstrap-icons';
import { CarritoContext } from "../../Context/UserContext";

const Header = () => {

  const { contadorItem } = useContext(CarritoContext);

  return (
    <div>
      <Navbar
        className="justify-content-end px-2"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">Consolas a 5.000 pesos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end nav"
          id="responsive-navbar-nav"
        >
          <Nav className="mr-auto">
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link className=" py-2 text-decoration-none" href="/carrito">Carrito de compras 
              <Cart color="white" className="mx-2" size={20} />
              ( {contadorItem} )
            </Nav.Link>
            
          </Nav>
         
          <Nav>
            <NavDropdown title="" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                iniciar sesión
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Crear cuenta
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
