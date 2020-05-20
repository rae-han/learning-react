import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    name: '',
    message: '',
    inputMessage: ''
  }

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleSubmit(e) {
  //   this.setState({
  //     inputMessage: this.state.message,
  //     message: ''
  //   })
  // }
  handleSubmit = (e) => {
    this.setState({
      inputMessage: this.state.message,
      message: ''
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.name}{this.state.name.length>0 ? `'s ` : ' '}이벤트 테스트 {this.state.inputMessage}</div>
        <input 
          type="text"
          name="name"
          placeholder="사용자명"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={this.handleSubmit}
        >저장 후 초기화</button>
      </div>
    );
  }
}

export default EventPractice; 