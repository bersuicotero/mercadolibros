import React, { Component } from 'react'
import { Button,ButtonGroup,ButtonToolbar } from "react-bootstrap";
import {withRouter} from 'react-router-dom'


class Navegacion extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(x){
    var path = x;        
    this.props.history.push(path);   
  }
  handleSubmit = async event =>{
    event.preventDefault();
    this.setState({ isLoading: true });
  }
  render() {
      return (
        <div onSubmit={this.handleSubmit}>
            <ButtonToolbar>
                    <ButtonGroup>
                        <Button onClick={() => this.routeChange('./CargarLibros')}>Cargar libros</Button>
                        <Button onClick={() => this.routeChange('./BuscarUsuarios')}>Buscar usuarios</Button>
                        <Button onClick={() => this.routeChange('./ABMUsuarios')}>ABM Usuarios</Button>
                    </ButtonGroup>
            </ButtonToolbar>
        </div>
      )
  }
}

export default withRouter(Navegacion)