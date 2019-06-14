import React, { Component } from 'react'
import Navegacion from './Navegacion';
import {FormGroup,Form,Button,InputGroup,FormControl,Glyphicon} from 'react-bootstrap';

export default class BuscarUsuarios extends Component {
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
                    <Button>Cancel</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
