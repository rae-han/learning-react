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
            // this.setState({ number: number+1 })
            this.setState({ number: this.state.number+2 }) // 위 아래 코드 중복 동작 안한다.

            this.setState((prevState, props) => {
              console.log(prevState, props)

              return {
                number: prevState.number+1
              }
            })
            
            this.setState(prevState => ({
              number: prevState.number+2
            }),
            () => {
              console.log(`setState 호출`)
            })
          }}
        >+1+2</button>
      </div>
    );
  }
}

export default MultipleValues;

