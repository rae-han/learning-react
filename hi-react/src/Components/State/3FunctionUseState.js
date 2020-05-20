import React, { useState } from 'react';

const FunctionUseState = () => {
  const [message, setMessage] = useState('버튼을 눌려주세요!');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black')

  return (
    <div>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>
      <h2 style={{ color }}>{message}</h2>
      <div>
        <button style={{ color: 'red' }} onClick={() => setColor('red')}
        >빨간색</button>
        <button style={{ color: 'green' }} onClick={() => setColor('green')}
        >초록색</button>
        <button style={{ color: 'blue' }} onClick={() => {
          setColor('blue')
          // color = 'black' // 이런 식으로 직접 바꿔주면 안된다.
        }}
        >파란색</button>
        <button onClick={()=>{ setColor('') }}>초기화</button>
      </div>
    </div>
  );
};

export default FunctionUseState;