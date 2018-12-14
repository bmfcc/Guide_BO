import React, { Component } from 'react';
import './App.css';
import ButtonsAndViewContainer from "../src/views/containers/buttonsAndViewContainer/ButtonsAndViewContainer"
import HeaderContainer from "../src/views/containers/headerContainer/HeaderContainer"

class App extends Component {
  render() {
    return (
      <div>
        <div style={{height:30+"%"}}>
          <HeaderContainer/>
        </div>
        <div style={{height:70+"%"}}>
          <ButtonsAndViewContainer/>          
        </div>        
      </div>
    );
  }
}

export default App;