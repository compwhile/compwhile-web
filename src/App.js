import React, { Component } from 'react';
import logopng from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logopng} className="App-logo" alt="logo" />
          <h2>Welcome to compwhile</h2>
        </div>
        <p className="App-intro">
          compwhile is an open source project to enhance and level up your study of programming languages in Computability Theory course.
        </p>
      </div>
    );
  }
}

export default App;
