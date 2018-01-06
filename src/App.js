import React, { Component } from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import test from './images/test.png';
import './stylesheets/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="test">
          <div className="background"></div>
          <img src={test}/>
        </div>
      </div>
    );
  }
}

export default App;
