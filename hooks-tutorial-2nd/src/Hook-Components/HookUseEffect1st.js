import React, { useState, useEffect } from 'react';

const HookUseEffect1st = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');

    return () => {
      console.log('cleanup')
    };
  }, [])

  const onChangeName = e => {
    console.log('useEffect 1st onChageName')
    setName(e.target.value)
  }
  
  const onChangeNickname = e => {
    console.log('useEffect 1st onChangeNickname')
    setNickname(e.target.value)
  }

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName}/>
        <input type="text" value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>별명 : {nickname}</div>
      </div>
    </div>
  );
};

export default HookUseEffect1st;