import React, { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, [])

  // const onClick = useCallback(e => {
  //   onInsert(value)
  //   setValue('')
  // }, [onInsert, value])
  
  // const onKeyPress = useCallback(e => {
  //   console.log(1)
  //   if(e.key === 'Enter') {
  //     onInsert(value);
  //     setValue('')
  //   }
  // }, [onInsert, value])

  const onSubmit = useCallback(e => {
    onInsert(value)
    setValue('')

    e.preventDefault();
  }, [onInsert, value])

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">확인</button>
    </form>
  );
};

export default TodoInsert;
cod