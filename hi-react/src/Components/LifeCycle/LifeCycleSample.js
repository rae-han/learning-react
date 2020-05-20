import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  }

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('1-1', 'constructor')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('1-2', '2-1', '3-1', 'getDerivedStateFromProps')
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('1-4', '2-4', 'componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('2-2', '3-2', 'shouldComponentUpdate', nextProps, nextState)
    return nextState.number % 10 !== 4;
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('3-4', 'getSnapshotBeforeUpdate')
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('3-5', 'componentDidUpdate', prevProps, prevState);
    if(snapshot) {
      console.log('업데이트 전 색상', snapshot)
    }
  }

  render() {
    console.log('1-3', '2-3', '3-3', 'render')

    // this.setState({
    //   number: this.state.number+1
    // })
    // console.log(this.state.number)

    const style = {
      color: this.props.color
    }

    return (
      <div>
        {this.props.missing.value}
        <h2 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h2>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;