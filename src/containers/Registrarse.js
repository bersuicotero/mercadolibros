import React, { Component } from "react";
import {  FormGroup, FormControl, ControlLabel, Button, Panel} from "react-bootstrap";
import "./Registrarse.css";
import {withRouter} from 'react-router-dom';

class Registrarse extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            Username:"",
            Nombre: "",
            Apellido: "",
            Password:"",
            confirmPassword:"",
            newUser:null,
            error:null,
            mensaje:null
        };
        this.routeChange = this.routeChange.bind(this);
        this.send = this.send.bind(this);
    }
    routeChange(){
      let path = './Login';        
      this.props.history.push(path);   
    }
    async send() {
      const response = await fetch("https://miapp-taller6.herokuapp.com/usuarios/create", {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.Username,
          nombre: this.state.Nombre,
          apellido: this.state.Apellido,
          password : this.state.Password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      if(response.status >=200 && response.status <299){
        this.setState({
            mensaje: data.message,
            error: null
        })
        }else{
            this.setState({
                error: data.message,
                mensaje: null
            })
        }
    }

    validateForm(){
        return(
            this.state.Username.length > 0 &&
            this.state.Nombre.length > 0 &&
            this.state.Password.length > 0 &&
            this.state.Password === this.state.confirmPassword
        );

    }
    handleChange = event =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = async event =>{
        event.preventDefault();
        this.setState({ isLoading: true });
        this.setState({ newUser: "Test" });
        this.setState({ isLoading: false });
    }

    renderForm() {
        return (
          <form onSubmit={this.handleSubmit} className="card col-md-6 col-lg-6 center-block">
            <FormGroup controlId="Username" bsSize="large">
              <ControlLabel>Usuario</ControlLabel>
              <FormControl
                autoFocus
                placeholder="Usuario"
                type="text"
                value={this.state.Username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="Nombre" bsSize="large">
              <ControlLabel>Nombre</ControlLabel>
              <FormControl
              placeholder="Usuario"
                value={this.state.Nombre}
                onChange={this.handleChange}
                type="text"
              />
            </FormGroup>
            <FormGroup controlId="Apellido" bsSize="large">
              <ControlLabel>Apellido</ControlLabel>
              <FormControl
              placeholder="Apellido"
                value={this.state.Apellido}
                onChange={this.handleChange}
                type="text"
              />
            </FormGroup>
            <FormGroup controlId="Password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
              placeholder="Password"
                value={this.state.Password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="large">
              <ControlLabel>Confirmar Password</ControlLabel>
              <FormControl
                placeholder="Confirmar Password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              className="btn btn-success"
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Signup"
              loadingText="Signing up…"
              onClick={this.send}
            >Registrarse</Button>
          </form>
        );
      }
    render() {
        return (
          <div className="Signup">
          <Panel>
            <Panel.Heading><h1>Registrarse</h1></Panel.Heading>
            <Panel.Body>{this.renderForm()}</Panel.Body>
            <Panel.Footer>
            <div style={{color: "#FF0000"}}>{this.state.error}</div>
            <div style={{color: "#2E8B57"}}>{this.state.mensaje}</div>
            </Panel.Footer>
          </Panel>                 
          </div>
        );
    }
}

export default withRouter(Registrarse);