import React, { useState } from 'react';

const Count = () => {
  const [value, setValue] = useState(0);

  let handleValue = num => {
    console.log(num)
    setValue(value + num);
  }

  return (
    <div>
      <p>현재 카운터 값은 <b>{value}</b>입니다.</p>

      <button onClick={() => { handleValue(1)} }>+1</button>
      <button onClick={() => { handleValue(-1)} }>-1</button>
    </div>
  );
};

export default Count;