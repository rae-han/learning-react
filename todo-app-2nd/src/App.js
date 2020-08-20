import React from 'react';

import TodoTemplate from './Components/TodoTemplate'
import TodoInsert from './Components/TodoInsert'
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;