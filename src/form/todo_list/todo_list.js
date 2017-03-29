import React from 'react';
import Todo from '../todo_item/todo_item';

export default function todoInput({todos, remove}){

  const todoNode = todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        remove={remove}
      />
    );
  });

  return (
    <ul className="list-group">
      {todoNode}
    </ul>
  );
}
