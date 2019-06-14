import React, { Component } from 'react'
import {Table,ButtonGroup,Button,Badge, Grid} from 'react-bootstrap'
import {todos} from "../todos.json";

export default class Carrito extends Component {
  constructor(props){
    super(props)
    
    this.state= {
      clicks:0,
      show: true,
      }
      this.state={todos};
  }
  incrementarCant=()=>{
    this.setState({clicks: this.state.clicks + 1})
  }
  descontarCant=()=>{
    this.setState({clicks: this.state.clicks + 1})
  }
  ToggleClick=()=>{
    this.setState({show: !this.state.show})
  }
  render() {
    const todos = this.state.todos.map((todo)=>{
      return (
        <div>
          
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto:</th>
                <th>Cantidad x:</th>
                <th>Precio:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{todo.titulo}</td>
                <td>
                  <button onClick={this.descontarCant}>-1</button>
                  <Badge variant="light">1</Badge>
                  <button onClick={this.incrementarCant}>+1</button>
                  <button onClick={this.ToggleClick}>
                  { this.state.show ? 'Hide number' : 'Show number' }
                  </button>
                  { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
                </td>
                <td>{todo.precio}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    })
    return(
      <div>
        <h1>Carrito de compras</h1>
        {todos}
        <Grid purchase-card>
          <h5>valor</h5>
        </Grid>
        <ButtonGroup>
          <Button success>Confirmar</Button>
          <Button danger>Cancelar</Button>
        </ButtonGroup>
      </div>
    )
  }
}
