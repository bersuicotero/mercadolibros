import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel,Panel} from "react-bootstrap";
import "./Login.css";
import login from "./Login.png";
import {withRouter, Redirect} from 'react-router-dom';
import {PostData} from '../services/PostData'


class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:"",
            password:"",
            ir: false,
            error:null
        };
        this.recibe = this.recibe.bind(this);
    }
    async recibe(){    
        let request = {
            username : this.state.username,
            password : this.state.password
        }
        var result = await PostData("authenticate", request);
        var uAdmin="Admin", user="User";
        var json = await result.json();
        
        localStorage.setItem('role',json.role);
        if(result && result.status===200 && user === localStorage.role){
            console.log(result);
            localStorage.setItem('session', json.token);
            this.setState({ir: true})
        } else if(result && result.status===200 && uAdmin === localStorage.role){
            localStorage.setItem('sessionAdmin', json.token);
            this.setState({ir: true})
        } else {
            this.setState({error: json.message})
            console.log(json.message);
        }
    };
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
    handleChange = event =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event =>{
        event.preventDefault();    
    }
    render(){
        if(this.state.ir){
            if(localStorage.getItem('session')){
                return (<Redirect to="./Productos"/>)  
            }else if(localStorage.getItem('sessionAdmin')){
                return (<Redirect to="./CargarLibros"/>)
            }
        }
        return(
            
            <div>
                <Panel>
                <Panel.Heading><h1>Iniciar sesión</h1></Panel.Heading>
                <Panel.Body>
                    <div className="Login">
                        <div className="card mt-4">
                            <img className="card-img-top" style={{ width: 180 }} src={login}  
                            alt="Card Ingresar"></img>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="username" bsSize="large">
                                    <ControlLabel>Usuario</ControlLabel>
                                    <FormControl autoFocus
                                    type="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    placeholder="Usuario"
                                    />
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large">
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl autoFocus
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                    />
                                </FormGroup>
                                </form>
                            </div>
                            <div className="card-footer">
                                <Button className="btn btn-success" block bsSize="large" 
                                disabled={!this.validateForm()} 
                                type="submit"
                                onChange={this.handleChange}
                                onClick={this.recibe}>Ingresar</Button>
                            </div>
                        </div>
                    </div>
                </Panel.Body>
                <Panel.Footer><div style={{color: "#FF0000"}}>{this.state.error}</div></Panel.Footer>
                </Panel>
            </div>
        );
    }
}

export default withRouter(Login);