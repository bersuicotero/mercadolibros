import React, { Component } from 'react';
import {Panel, PanelGroup,Button, Col,Image} from "react-bootstrap";
import {todos} from "../todos.json";
import img from "../IMG/la-comunidad-del-anillo-200x296.jpg";

export default class Productos extends Component {
    constructor(){
        super();
        this.state = {todos};
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(){
        let path = './Carrito';        
        this.props.history.push(path); 
    }
  render() {
      const todos = this.state.todos.map((todo) => {
          return (<PanelGroup>
              <Col className="col-md-3">
                  <Panel>
                      <Panel.Heading>{todo.titulo}</Panel.Heading>
                      <Panel.Body>
                          <Image src={img} thumbnail />
                          <Panel.Title>{todo.genero}</Panel.Title>
                          <div className="card-subtitle mb-2 text-muted">Sub-Titulo</div>
                          <p>{todo.descripcion}
                          </p>
                      </Panel.Body>
                      <Panel.Footer>
                          <h6>{todo.precio}</h6>
                          <Button className="btn-success" onClick={this.handleOnClick}>Agregar al carrito</Button>
                      </Panel.Footer>
                  </Panel>
              </Col>
          </PanelGroup>);
      })
      return(
          <div className="container">
              <div className="row mt-2">
                    {todos}
              </div>
          </div>

      )
  }
}
