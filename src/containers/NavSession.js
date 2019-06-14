import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class NavSession extends Component {
    
  logout(){
        localStorage.clear();
      }
      render() {
        let buttonRegistro,buttonLogin,btnBuscar,renderizado;
        if(localStorage){
          if (localStorage.getItem('session')) {
          buttonRegistro = <NavItem>Carrito</NavItem>
          buttonLogin = <NavItem onClick={this.logout}>Salir</NavItem>
          renderizado=
          <Nav pullRight>
            <LinkContainer to="Carrito">
              {buttonRegistro}
            </LinkContainer>
            <LinkContainer to="Login">
              {buttonLogin}
            </LinkContainer>
          </Nav> 
        }else if(localStorage.getItem('sessionAdmin')){
          buttonRegistro = <NavItem>CargarLibros</NavItem>
          btnBuscar = <NavItem>Usuarios</NavItem>
          buttonLogin = <NavItem onClick={this.logout}>Salir</NavItem>
          renderizado=
          <Nav pullRight>
            <LinkContainer to="ABMUsuarios">
              {btnBuscar}
            </LinkContainer>
            <LinkContainer to="CargarLibros">
              {buttonRegistro}
            </LinkContainer>
            <LinkContainer to="Login">
              {buttonLogin}
            </LinkContainer>
          </Nav>
        }
        else{
          buttonRegistro = <NavItem>Registrarse</NavItem>
          buttonLogin = <NavItem>Ingresar</NavItem>;
          renderizado=
          <Nav pullRight>
            <LinkContainer to="Registrarse">
              {buttonRegistro}
            </LinkContainer>
            <LinkContainer to="Login">
              {buttonLogin}
            </LinkContainer>
          </Nav>
        }
      }      
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
                    {renderizado}
              </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

