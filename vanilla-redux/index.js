import { createStore } from 'redux';

console.log('hello vanilla javascript')

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE })
// 액션
// 상태에 변화가 필요하면 액션이 발생.
// type필드를 반드시 가지고 있어야하고 액션의 이름이다.
// 업데이트를 할 때 참고해야 할 값.
// 액션 생성 함수
// 액션 객체를 만들어 주는 함수.
// 어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매변 액션 객체를 직접 작성하기 번거로울 수 있어 함수로 만들어서 관리한다.

const initialState = {
  toggle: false,
  counter: 0
}

function reducer (state=initialState, action) {
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter-1
      };
    default:
      return state;
  }
}
// 리듀서
// 변화를 일으키는 함수
// 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다.
// 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해 준다.


const store = createStore(reducer);
// 하나의 프로젝트는 하나의 스토어만 가질 수 있다.
// 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있고, 몇 가지 중요한 내장 함수를 지닌다.

const render = () => {
  const state = store.getState();

  if(state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
}

render();
store.subscribe(render)
// 구독
// 스토어의 내장 함수 중 하나로 리스너 함수를 파라미터로 넣어서 호출해 주면, 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출된다.

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
  // 디스패치
  // 스토어의 내장 함수 중 하나로 '액션을 발생시키는 것' 이라고 이해하면 된다. 
  // 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출한다.
}
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
}
btnDecrease.onclick = () => {
  store.dispatch(decrease());
}

// const listener = () => {
//   console.log('Updated state');
// }

// const unsubscribe = store.subscribe(listener);

// unsubscribe();