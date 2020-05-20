import React, { Fragment } from 'react'; // 리액트를 불러와서 사용하게 해준다.
import './App.css'

// components
import RCC from './Components/RCC.js'
import MyComponentRSC from './Components/MyComponentRSC.js' // 모듈 불러오기
import MyComponentRCC from './Components/MyComponentRCC.js' // 모듈 불러오기

// pages
import StateIndex from './Components/State/StateIndex.js'
import EventIndex from './Components/Event/EventIndex.js'
import NameDomIndex from './Components/NameDom/NameDomIndex.js'
import IterationIndex from './Components/Iteration/IterationIndex.js'
import LifeCycle from './Components/LifeCycle/LifeCycleIndex.js'


function App() {
  const name = "React"
  const ZERO = 0
  const returnUndefined = undefined;
  const introduction = false;
  return (
    <Fragment>
      { introduction &&
        <div>
          <div
            style={{
              backgroundColor: 'black',
              color: 'aqua',
              fontSize: '48px',
              fontWeight: 'bold',
              padding: 16
            }}
          >Hello! {name}.</div>
          <div className="react">Hi! {name === 'React' && 'React Native' }.</div>
          <div>Zero is an exception : { ZERO && 1 }</div>
          <div>{ returnUndefined || 'Value is undefined' }</div> {/* return undefined 는 안되지만 return <div>undefined</div> 는 된다. */}
  
          <RCC></RCC>
          <MyComponentRSC name="React"></MyComponentRSC> <hr/>
          <MyComponentRSC name={3} favoriteNumber={2}></MyComponentRSC> <hr/>
          <MyComponentRSC favoriteNumber={3}>React Children</MyComponentRSC> <hr/>
  
          <MyComponentRCC name="React" favoriteNumber={1}>React Children</MyComponentRCC> <hr/>    
          <MyComponentRCC favoriteNumber={1}>React Children</MyComponentRCC> <hr/>      
        </div>
      }
      {/* <StateIndex></StateIndex> */}
      <EventIndex></EventIndex>
      <NameDomIndex></NameDomIndex>
      <IterationIndex></IterationIndex>
      <LifeCycle></LifeCycle>
    </Fragment>
  );
}

export default App;

