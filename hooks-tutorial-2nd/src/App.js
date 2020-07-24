import React, { useState } from 'react';

import HookUseState1st from './Hook-Components/HookUseState1st'
import HookUseState2nd from './Hook-Components/HookUseState2nd'

import HookUseEffect1st from './Hook-Components/HookUseEffect1st'

import HookUseReducer1st from './Hook-Components/HookUseReducer1st'
import HookUseReducer2nd from './Hook-Components/HookUseReducer2nd'

import HookUseMemo1st from './Hook-Components/HookUseMemo1st'
import HookUseMemo2nd from './Hook-Components/HookUseMemo2nd'

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="App">
      <h3>1. useState</h3>
      <p>함수형 컴포넌트에서 가변적인 상태를 지닐 수 있게 해 준다.</p>
      <HookUseState1st />

      <h3>2. useState</h3>
      <HookUseState2nd /> 

      <hr />

      <h3>3. useEffect</h3>
      <p>리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook.</p>
      <p>두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣으면 해당 값이 변경 될때만 실행된다.</p>
      <p>컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup)함수를 반환해 주어야 한다.</p>
      <p>언마운트될 때만 뒷정리 함수를 호출하고 싶다면 두 번째 파라미터에 비어 있는 배열을 넣으면 된다.</p>
      <button onClick={()=>{ setVisible(!visible) }}>{ visible ? '숨기기' : '보이기' }</button>
      { visible && <HookUseEffect1st />} 
      
      <hr />

      <h3>4. useReducer</h3>
      <p>useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주고 싶을 때 사용하는 Hook.</p>
      <p>현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 엑션(action) 값을 전달 받아 새로운 상태를 반환하는 함수이다.</p>
      <p>리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야 한다.</p>
      <p>useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어준다.</p>
      <p>이 Hook을 사용하면 state 값과 dispaych 함수를 받아오는데 state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수이다.</p>
      <p>dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조이다.</p>
      <HookUseReducer1st />

      <h3>5. useReducer</h3>
      <HookUseReducer2nd />

      <hr />

      <h3>6. useMemo</h3>
      <p>useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.</p>
      <HookUseMemo1st />
      <p>숫자를 등록할 때뿐만 아니라 인풋 내용이 수정될 때도 getAverage 함수가 호출 된다.</p>
      <p>useMemo를 사용하면 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 , 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용한다.</p>
      <HookUseMemo2nd />
    </div>
  );
}

export default App;
