import React, { Component } from 'react';
import './App.css';
import CloudComponent from './components/CloudComponent/CloudComponent'

const coloursArray = ['red', 'green', 'blue'];
let colourIndex = 0;
let currentColour = coloursArray[0];

class App extends Component {
  constructor() {
    super();
    this.timer = null;
    this.state = {currentColour};
  }
  componentDidMount() {
    const changeColour = () => {
      colourIndex = (colourIndex + 1) % coloursArray.length;
      this.setState({currentColour: coloursArray[colourIndex]});
    }
    this.timer = setInterval(changeColour, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="vertical">
        <div className="horizontal">
          <div className="cloud-component">
            <CloudComponent fillColour={this.state.currentColour} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
