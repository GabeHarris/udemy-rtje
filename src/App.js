import React, { Component } from 'react';
import './App.css';
import Congrats from './Congrats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Congrats success={false} />
      </div>
    );
  }
}

export default App;