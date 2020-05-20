import React, { useState } from 'react';

const Say = () => {
  const [msg, setMsg] = useState('인사하기 전');
  const onClickEnter = () => setMsg('안녕하세요!!');
  const onClickLeave = () => setMsg('안녕히가세요.');

  return (
    <div>
      <div>{msg}</div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};

export default Say;