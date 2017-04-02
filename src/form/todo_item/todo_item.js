import React from 'react';

export default function todo({todo, remove}){
  return (
    <li className="form-list__item">
      <span>{todo.text}</span>
      <button className="form-list__button" onClick={() => {remove(todo.id)}}>Remove</button>
    </li>
  );
}