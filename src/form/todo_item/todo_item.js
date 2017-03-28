import React from 'react';

export default function Todo({todo, remove}) {
  return (
    <li onClick={remove(todo.id)}>{todo.text}</li>
  );
}
