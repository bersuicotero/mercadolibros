import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class Navegacion extends Component {
  logout(){
    sessionStorage.setItem("",'');
    sessionStorage.clear();
  }
  render() {
      return (
        <div>
          {sessionStorage.getItem('')?(
              <Navbar fluid collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/" id="link">MercadoLibros</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <LinkContainer to="Carrito">
                      <NavItem>Carrito</NavItem>
                    </LinkContainer>
                    <LinkContainer to="Login">
                      <NavItem onClick={sessionStorage.clear()}>Salir</NavItem>
                    </LinkContainer>  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          ):(
            <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" id="link">MercadoLibros</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="Registrarse">
                    <NavItem>Registrarse</NavItem>
                  </LinkContainer>
                  <LinkContainer to="Login">
                    <NavItem>Ingresar</NavItem>
                  </LinkContainer>  
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          )}

        </div>
      )
  }
}

