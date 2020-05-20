import React, { Component } from 'react';

import ScrollBox from './ScrollBox.js'

class ScrollBoxIndex extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}></ScrollBox>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        {/* 
          () => 함수 하지 않고 그냥 함수명을 넣어도 되지만 컴포넌트가 처음 렌더링 될때 함수 값이 undefined일수 있으므로 값을 읽어 오는 과정에서 오류가 발생할수 있다. 
          화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 메서드를 실행하면 버튼을 누를 때(이미 한 번 렌더링을 해서 함수를 설정한 시점) 값을 읽어와서 실행하므로 오류가 발생하지 않는다.
        */}
      </div>
    );
  }
}

export default ScrollBoxIndex;