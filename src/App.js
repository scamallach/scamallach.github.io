import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import CloudComponent from './components/CloudComponent/CloudComponent'

const coloursArray = ['#f66e6e', '#f6b36e', '#f5f66e', '#6ef3f6', '#9c6ef6'];
let colourIndex = 0;
let currentColour = coloursArray[0];

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize('UA-28252626-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
