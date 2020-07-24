import React, { useState } from 'react';

const HookUseState2nd = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('')

  const onChangeName = e => {
    console.log('useState 2nd onChageName')
    setName(e.target.value)
  }
  
  const onChangeNickname = e => {
    console.log('useState 2nd onChangeNickname')
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

export default HookUseState2nd;