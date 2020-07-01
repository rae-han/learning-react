import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중...');
  const reducer = (a, b) => a + b;

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce(reducer);
  return sum / numbers.length
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value)
  };
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }
  const handleInsert = e => {
    if(e.key === 'Enter') {
      onInsert(e);
    }
  }

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} onKeyPress={handleInsert}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;