import React, { Component } from 'react'
import Navegacion from './Navegacion';
import {FormGroup,Form,Button,InputGroup,FormControl,Glyphicon, Table} from 'react-bootstrap';


export default class BuscarUsuarios extends Component {
    constructor(props){
        super(props);
        this.state={
            Token: localStorage.getItem('sessionAdmin'),
            ID:"",
            error: null,
            mensaje:null
        }
        this.eliminar = this.eliminar.bind(this)
    }
    handleChange = event =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    async eliminar(){
        var url = "https://miapp-taller6.herokuapp.com/usuarios/:id"
        const response = await fetch(url.replace(":id", this.state.ID),{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'bearer ' + localStorage.getItem('sessionAdmin'),
                
              },
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
    
    async componentDidMount(){
        var contenido = document.querySelector('#contenido')
        fetch("https://miapp-taller6.herokuapp.com/usuarios/", {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'bearer ' + localStorage.getItem('sessionAdmin'),
          }
          
        })
        .then(res => res.json())
        .then(datos =>{
            contenido.innerHTML=''
            for(let valor of datos){
                contenido.innerHTML += `
                    <td>${valor._id}</td>
                    <td>${valor.username}</td>
                    <td>${valor.nombre}</td>
                    <td>${valor.apellido}</td>
                    <td>${valor.role}</td>
                `
            }
        })
        .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <div>
                <Navegacion/>
                <h1>Eliminar Usuarios</h1>
                <Form>
                    <FormGroup>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Usuario</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody id="contenido">
                            <tr>
                                
                            </tr>
                        </tbody>
                    </Table>
                    </FormGroup>
                    <FormGroup controlId="ID">
                        <InputGroup>
                            <InputGroup.Addon><Glyphicon glyph="trash"/></InputGroup.Addon>
                                <FormControl
                                placeholder="ID"
                                value={this.state.ID}
                                onChange={this.handleChange}
                                />
                        </InputGroup>
                        <Button 
                        onChange={this.handleChange}
                        onClick={this.eliminar}><Glyphicon glyph="trash"/> Eliminar</Button>
                    </FormGroup>
                </Form>
                <div style={{color: "#FF0000"}}>{this.state.error}</div>
                <div style={{color: "#2E8B57"}}>{this.state.mensaje}</div>
            </div>
        )
    }
}
