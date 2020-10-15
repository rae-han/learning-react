import React, { useCallback } from 'react';
import { List } from 'react-virtualized'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];

    return (
      <TodoListItem
        todo={todo} key={key}
        onRemove={onRemove} onToggle={onToggle}
        style={style}
      ></TodoListItem>
    )
  }, [onRemove, onToggle, todos]);

  return (
    <List
      className="TodoList"
      width={512} height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    ></List>
  );

  // return (
  //   <div className="TodoList">
  //     { todos.map(todo => (
  //       <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}/>
  //     ))}
  //   </div>
  // );
};

export default React.memo(TodoList);