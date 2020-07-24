import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('Func getAverage');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length
}

const HookUseMemo2nd = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value)
  }

  const onInsert = e => {
    if(number === '') {
      return;
    }

    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }

  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onInsert(e)
    }
  }

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input type="text" value={number} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{index}: {value}</li>
        ))}
      </ul>
      <div><b>평균값:</b> {avg}</div>
    </div>
  );
};

export default HookUseMemo2nd;