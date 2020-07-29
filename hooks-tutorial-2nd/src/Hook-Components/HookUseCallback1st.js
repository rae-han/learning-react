import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length
}

const HookUseCallback1st = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback(e => {
    console.log('Func onChange')
    setNumber(e.target.value)
  }, []) // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    console.log('Func onInsert')
    if(isNaN(number)) { setNumber(''); return; }
    if(number.trim() === '') { setNumber(''); return; }

    const nextList = list.concat(parseInt(number))

    setList(nextList);
    setNumber('');
  }, [number, list]) // number 혹은 list가 바뀌었을 때만 함수 생성

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

export default HookUseCallback1st;