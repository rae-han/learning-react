const { produce, original } = require('immer') ;

console.log(produce)

const originalState = [
  {
    id: 1,
    todo: '1',
    checked: true
  },
  {
    id: 2,
    todo: '22',
    checked: false
  }
];

const nextState = produce(originalState, draft => {
  const todo = draft.find(t=>t.id===2);
  todo.checked = true;

  draft.push({
    id: 3,
    todo: '333',
    checked: false
  })

  draft.splice(draft.findIndex(t=>t.id===1),1);
});

console.log(originalState)
console.log(nextState);

console.log(originalState == nextState)

const origin = {
  a: 'a',
  b: {
    c: 'c',
    d: {
      e: 'e'
    }
  }
}

const copy = {
  ...origin
}

console.log(copy)