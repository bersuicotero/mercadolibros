import React, { Component } from 'react'
import Navegacion from './Navegacion'
import {Form,ControlLabel,Button,FormGroup,FormControl} from 'react-bootstrap'

export default class CargarLibros extends Component {
  constructor(props){
    super(props);
    this.state={
      titulo:"",
      genero:"",
      Subtitulo:"",
      Descripcion:""
    }
    
  }
  handleSubmit = event =>{
    event.preventDefault();    
  }
  handleChange = event =>{
    this.setState({
        [event.target.id]: event.target.value
    });
  }
  render() {
      return (
        <div>
          <Navegacion/>
            <h3>Acá se cargan los libros</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup controlId="Titulo">
                <ControlLabel>Titulo</ControlLabel>
                <FormControl
                autoFocus
                value={this.state.titulo}
                onChange={this.handleChange}
                placeholder="El señor de los anillos"
                />
              </FormGroup>
              <FormGroup controlId="Genero">
                <ControlLabel>Género</ControlLabel>
                <FormControl
                autoFocus
                value={this.state.genero}
                onChange={this.handleChange}
                placeholder="Fantasía"/>
              </FormGroup>
              <FormGroup controlId="Subtitulo">
                <ControlLabel>Sub-Titulo</ControlLabel>
                <FormControl
                autoFocus
                value={this.state.Subtitulo}
                onChange={this.handleChange}
                placeholder="El retorno del rey"/>
              </FormGroup>
              <FormGroup controlId="Descripcion">
                <ControlLabel>Descripción</ControlLabel>
                <FormControl as="textarea"
                autoFocus
                value={this.state.Descripcion}
                onChange={this.handleChange}
                placeholder="Lorem ipsum"/>
              </FormGroup>
              <Button
              onChange={this.handleChange}
              onClick={this.handleChange}>Aceptar</Button>
            </Form>
        </div>
      )
  }
}
