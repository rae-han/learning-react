import React from 'react';
// import Counter from './components/Counter'
import CounterContainer from './containers/CounterContainer'
import Todos from './components/Todos'

import './App.css';

function App() {
  return (
    <div>
      {/* <Counter number={0}></Counter> */}
      <CounterContainer></CounterContainer>
      <hr/>
      <Todos></Todos>
    </div>
  );
}

export default App;
