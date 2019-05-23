import React, { Component } from 'react';
import Routes from "./Routes";
import Navegacion from './containers/Navegacion';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <Navegacion />
        <Routes />
      </div>
    );
  }
}

export default App;
