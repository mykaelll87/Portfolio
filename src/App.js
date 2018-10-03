import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import 'animate.css';
import {WOW} from 'wowjs';
import SkewedContainer from './components/SkewedContainer'

class App extends Component {
  componentDidMount(){
    window.wow = new WOW();
  }
  render() {
    return (
      <div className="App">
        <SkewedContainer className="appHeader">
          
        </SkewedContainer>
        <div style={{height:'75vh'}}></div>
        <SkewedContainer className="bgAccent noBottom">
          <p>Bon matin</p>
        </SkewedContainer>
      </div>
    );
  }
}

export default App;
