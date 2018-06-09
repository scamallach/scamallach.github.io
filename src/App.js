import React, { Component } from 'react';
import './App.css';
import CloudComponent from './components/CloudComponent/CloudComponent'

class App extends Component {
  render() {
    return (
      <CloudComponent lol={'red'} />
    );
  }
}

export default App;
