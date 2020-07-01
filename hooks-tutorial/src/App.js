import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Count from './Components/Count.js'
import Info from './Components/Info.js'
import Counter from './Components/Counter.js'
import Infor from './Components/Infor.js'
import Average from './Components/Average.js'
import AverageMemo from './Components/AverageMemo.js'
import AverageMemoCallback from './Components/AverageMemoCallback.js'
import AverageMemoCallbackRef from './Components/AverageMemoCallbackRef.js'
import LocalValueRCC from './Components/localValueRCC.js'
// import LocalValueRSC from './Components/localValueRSC.js'
import InfoCustomHook from './Components/InfoCustomHook.js'

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="App">
      <Count></Count> <hr />
      
      <button 
      onClick={() => { setVisible(!visible) }}>{ visible ? '숨기기' : '보이기'}</button>
      { visible && <Info></Info> } <hr />
      {/* 뒷정리 함수만 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 비어있는 배열을 넣으면 된다.  */}

      <Counter></Counter> <hr />
      <Infor></Infor> <hr />
      <Average></Average> <hr />
      <AverageMemo></AverageMemo> <hr />
      <AverageMemoCallback></AverageMemoCallback> <hr />
      <AverageMemoCallbackRef></AverageMemoCallbackRef> <hr />
      <LocalValueRCC></LocalValueRCC>
      {/* <LocalValueRSC></LocalValueRSC> */}
      <InfoCustomHook></InfoCustomHook>

    </div>
  );
}

export default App;

