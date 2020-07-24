import React, { useState } from 'react';

const HookUseState1st = () => {
  const [value, setValue] = useState(0)

  const Minus = () => {
    console.log('Func Minus')
    setValue(value - 1);
  }

  const Plus = () => {
    console.log('Func Plus')
    setValue(value + 1);
  }

  return (
    <div>
      <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
      <button onClick={Minus}>-</button>
      <button onClick={Plus}>+</button>
    </div>
  );
};

export default HookUseState1st;