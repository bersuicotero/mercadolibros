import React, { Component } from 'react'
import {Panel,FormGroup,Form,FormControl,ControlLabel, Button} from 'react-bootstrap'

export default class CambiarContraseña extends Component {
    constructor(props){
        super(props)
        this.state={
            Nombre:"",
            Apellido:"",
            Contraseña:"",
            username:null,
            ID: null,
            error: null,
            mensaje: null
        }
        this.Cambiar = this.Cambiar.bind(this)
    }
    async componentDidMount(){
        const response = await fetch("https://miapp-taller6.herokuapp.com/usuarios/me", {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'bearer ' + localStorage.getItem('session'),
          }
          
        })
        const data = await response.json()
        if(response.status >=200 && response.status <299){
            this.setState({
                username: data.username,
                ID: data._id
            })
                console.log(data.username, data._id)
        }else{
            console.log(data.message)
        }
        
    }
    async Cambiar()
    {
        var url = "https://miapp-taller6.herokuapp.com/usuarios/:id"
        const response = await fetch (url.replace(":id", this.state.ID),{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'bearer ' + localStorage.getItem('session'),
            },
            body: JSON.stringify({
                nombre: this.state.Nombre,
                apellido: this.state.Apellido,
                password: this.state.Contraseña
            })
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
    handleChange = event =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event =>{
        event.preventDefault();    
    }
    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <Panel>
                    <Panel.Heading><h1>Cambiar tus datos</h1><hr/>
                    <h3>Usuario: {this.state.username}</h3></Panel.Heading>
                    <br></br>
                    <Panel.Body>
                    <Form>
                        <FormGroup controlId="Nombre">
                            <ControlLabel>Nombre</ControlLabel>
                            <FormControl
                            autoFocus
                            value={this.state.Nombre}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Nombre"/>
                        </FormGroup>
                        <FormGroup controlId="Apellido">
                            <ControlLabel>Apellido</ControlLabel>
                            <FormControl autoFocus
                            type="text"
                            value={this.state.Apellido}
                            onChange={this.handleChange}
                            placeholder="Apellido"/>
                        </FormGroup>
                        <FormGroup controlId="Contraseña">
                            <ControlLabel>Contraseña</ControlLabel>
                            <FormControl autoFocus
                            value={this.state.Contraseña}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Contraseña"/>
                        </FormGroup>
                    </Form>
                    </Panel.Body>
                    <Panel.Footer>
                        <Button 
                        className="btn-success"
                        onClick={this.Cambiar}
                        >Aceptar</Button>
                    <hr></hr>
                    <div style={{color: "#FF0000"}}>{this.state.error}</div>
                    <div style={{color: "#2E8B57"}}>{this.state.mensaje}</div>
                    </Panel.Footer>
                </Panel>
            </div>
        )
    }
}
