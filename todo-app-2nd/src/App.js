import React, { useState } from 'react';

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

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default App;