import React, { Component } from 'react'
import Navegacion from './Navegacion';
import {FormGroup,Form,Button,InputGroup,FormControl,Glyphicon} from 'react-bootstrap';

export default class BuscarUsuarios extends Component {
    constructor(props){
        super(props);
        this.state={
            Token: localStorage.getItem('sessionAdmin'),
            username:""
        }
    }
    async send() {
        /* fetch("https://miapp-taller6.herokuapp.com/usuarios/usuarios").then((response)=>{
            return response.json()})
            .then(function(myJson) {
                console.log(myJson);
            }); */
        var result = fetch("https://miapp-taller6.herokuapp.com/usuarios/", {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'bearer ' + localStorage.getItem('sessionAdmin'),
          }
        })
        .then(console.log(result))
        .then(response => {
            
            if (response.status === 200) {
              return response.json();
              
            } else {
              throw new Error('Something went wrong on api server!');
            }
          })
        .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <div>
                <Navegacion/>
                <h1>Buscar Usuarios</h1>
                <Form>
                    <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="search"/></InputGroup.Addon>
                            <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>

                    <Button>Submit</Button>
                    <Button
                    onClick={this.send}>Cancel</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
