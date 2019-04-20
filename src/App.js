import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld/HelloWorld';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld message='perro' />
      </div>
    );
  }
}

export default App;
