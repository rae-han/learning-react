import React, { Component } from 'react';

import LifeCycleSample from './LifeCycleSample.js'
import ErrorBoundary from '../../Pages/ErrorBoundary.js'


function getRandomColor () {
  return `#${ Math.floor(Math.random() * 16777215).toString(16) }`
}

class LifeCycleIndex extends Component {
  state = {
    color: `#000000`
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>  
        </ErrorBoundary>
        <button onClick={this.handleClick}>랜덤 색상</button>
      </div>
    );
  }
}

export default LifeCycleIndex;