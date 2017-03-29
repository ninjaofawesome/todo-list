import React from 'react';

export default function todo({todo, remove}){
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => {remove(todo.id)}}>Remove</button>
    </li>
  );
}