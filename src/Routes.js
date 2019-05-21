import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Registrarse from "./containers/Registrarse";
import Productos from './containers/Productos'
import Carrito from './containers/Carrito'
import CargarLibros from './containers/CargarLibros'

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Login" exact component={Login} />
    <Route path="/Registrarse" exact component={Registrarse} />
    <Route path="/Productos" exact component={Productos} />
    <Route path="/Carrito" exact component={Carrito} />
    <Route path="/CargarLibros" exact component={CargarLibros} />
    <Route component={NotFound}/>
  </Switch>;