import React, { Component } from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

class BotonUpdate extends Component {
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
            <div>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button onClick={() => this.routeChange('./CambiarContraseña')}  
                        className="btn-success"
                        >Perfil</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        )
    }
}

export default withRouter(BotonUpdate)