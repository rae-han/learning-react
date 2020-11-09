import React, { useRef, useState } from 'react';
import './App.css';

import TodoTemplate from './components/TodoTemplate'
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'

const initBulkTodos = () => {
  let todos = [];


  for(let t=0; t<4; t++) {
    todos.push({
      id: t,
      text: `할일 ${t+1}`,
      checked: t%2===0 ? true : false
    })
  }

  return todos;
}

function App() {
  let bulkTodoData = initBulkTodos();
  let [todos, setTodos ] = useState(bulkTodoData)

  const nextId = useRef(bulkTodoData.length)

  const onInsert = (text) => {
    let todo = {
      id: nextId.current,
      text,
      checked: false
    }

    nextId.current++;

    setTodos(todos.concat(todo))
  }  

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos}></TodoList>

      </TodoTemplate>
    </div>
  );
}

export default App;
