import React, { useState } from 'react';
import './App.css';

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
  let [todos, setTodos ] = useState(initBulkTodos)

  console.log(todos)

  return (
    <div className="App">

    </div>
  );
}

export default App;

// let colorchips = ['#ea6b1c', '#d0021b', '#fad201', '#2196f3', '#dbdbdb', '#d3b094', '#fec0cf', '#0eb0a7', '#0b421a', '#362415', '#000027', '#000000']
