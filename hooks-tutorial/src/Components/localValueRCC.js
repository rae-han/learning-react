import React, { Component } from 'react';

class localValueRCC extends Component {
  id = 1;
  setId = (n) => {
    this.id = n;
  }
  printId = () => {
    console.log(this.id)
  }

  render() {
    return (
      <div>
        MyRCCComponent
      </div>
    );
  }
}

export default localValueRCC;