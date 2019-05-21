import React, {Component} from "react";
import "./Home.css";

export default class Home extends Component{
    render(){
        return(
            <div className="Home">
                <div className="lander">
                    <h1>MercadoLibros</h1>
                    <p>Tu tienda de libros On-Line</p>
                </div>
            </div>
        );
    }
}