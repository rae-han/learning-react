import React, { useReducer } from 'react';

function reducer(state, action) {
  // action type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state
  }
} // 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>      
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>      
    </div>
  );
};

export default Counter;