import React, { Component } from 'react';
import Routes from "./Routes";
import './App.css';
import NavSession from './containers/NavSession';

class App extends Component {
  updateHandler(){
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App container" onLoad={this.updateHandler.bind(this)}>
        <NavSession/>
        <Routes />
      </div>
    );
  }
}

export default App;
