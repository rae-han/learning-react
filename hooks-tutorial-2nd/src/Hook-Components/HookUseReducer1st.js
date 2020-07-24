import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value+1, onlyIncrement: state.onlyIncrement+2 };
    case 'DECREMENT':
      return { ...state, value: state.value-1 };
    default:
      return state
  }
}

const HookUseReducer1st = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0, onlyIncrement: 0 });

  return (
    <div>
      <p>현재 카운터 값은 <b>{state.value}</b>입니다. - {state.onlyIncrement}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+ 1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>- 1</button>
    </div>
  );
};

export default HookUseReducer1st;