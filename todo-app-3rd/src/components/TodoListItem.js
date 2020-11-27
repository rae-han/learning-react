import React from 'react';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  let { id, text, checked } = todo;

  return (
    <div>
      <span onClick={() => { onRemove(id) }}> del</span>
      <button onClick={()=> { onToggle(id) }} style={{ textDecoration: checked ? 'line-through' : 'none' }}>{text}</button>
    </div>
  );
};

export default React.memo(TodoListItem);
