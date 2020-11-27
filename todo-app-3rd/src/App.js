import React, { useCallback, useRef, useState } from 'react';
import './App.css';

import TodoTemplate from './components/TodoTemplate'
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'

const initBulkTodos = () => {
  let todos = [];


  for(let t=0; t<4096; t++) {
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

  const onInsert = useCallback((text) => {
    let todo = {
      id: nextId.current,
      text,
      checked: false
    }

    nextId.current++;
    setTodos(todos => todos.concat(todo))
  }, [])

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, [])
  
  const onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ))
  }, [])

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>

      </TodoTemplate>
    </div>
  );
}

export default App;
