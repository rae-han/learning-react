import React from 'react';

import TodoListItem from './TodoListItem'

const TodoList = ({todos, onRemove, onToggle}) => {
  console.log(todos)

  return (
    <div>
      { todos.map(todo => (<TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}></TodoListItem>)) }
    </div>
  );
};

export default React.memo(TodoList);
