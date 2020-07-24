import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log('HookUseReducer2nd', 'reducer', action)
  return {
    ...state,
    [action.name]: action.value
  }
}

const HookUseReducer2nd = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });

  const { name, nickname } = state;

  const onChange = e => {
    console.log('HookUseReducer2nd', 'onChange', e.target)
    dispatch(e.target)
  }

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange}/>
        <input type="text" name="nickname" value={nickname} onChange={onChange}/>
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>별명 : {nickname}</div>
      </div>
    </div>
  );
};

export default HookUseReducer2nd;