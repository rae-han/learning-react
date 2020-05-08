import React, { Component } from 'react';

class MultipleValues extends Component {
  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0
  //   }
  // }

  state = {
    number: 0,
    fixedNumber: 0
  }

  render() {
    const { number, fixedNumber } = this.state;
    
    return (
      <div>
        <h2>{number}</h2>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={()=>{
            this.setState({ number: number+1 })
          }}
        >+1</button>
      </div>
    );
  }
}

export default MultipleValues;