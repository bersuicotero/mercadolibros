import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class Navegacion extends Component {

  logout(){
    sessionStorage.setItem("",'');
    sessionStorage.clear();
  }
  render() {
    if(sessionStorage.getItem("")){
      return (
        <div>
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
        </div>
      )
    }
    else{
      return (
        <div>
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
                  <NavItem>Registrarse</NavItem>
                </LinkContainer>
                <LinkContainer to="Productos">
                  <NavItem>Salir</NavItem>
                </LinkContainer>  
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
  }
}

