import React, { useState, useCallback, useRef } from 'react';

import TodoTemplate from './Components/TodoTemplate'
import TodoInsert from './Components/TodoInsert'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'One',
      checked: true
    },
    {
      id: 2,
      text: 'Tow',
      checked: false
    },
    {
      id: 3,
      text: 'Three',
      checked: true
    }
  ])

  const nextId = useRef(todos.length+1);
  const onInsert = useCallback(text => {
    console.log(nextId)

    const todo = {
      id: nextId.current,
      text,
      checked: false
    };

    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos])

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
