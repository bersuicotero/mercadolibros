import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
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
            ir: false
        };
        this.routeChange = this.routeChange.bind(this);
        this.recibe = this.recibe.bind(this);
    }
    routeChange(x){
        let path = x;        
        this.props.history.push(path);   
      }
      recibe(){
          PostData("authenticate", this.state).then ((result)=>{
              let responseJSON = result;
              if(responseJSON){
                  sessionStorage.setItem('', responseJSON);
                  this.setState({ir: true})
              }
              else{

                console.log(result);
              }

          })
      }
    validateForm(){
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
            return (<Redirect to="./Productos"/>)
        }
        if(sessionStorage.getItem('')){
            return (<Redirect to="./Productos"/>)
        }
        return(
            <div className="col-md-6 col-lg-6 center-block">
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
                            onClick={this.recibe}>Ingresar</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);