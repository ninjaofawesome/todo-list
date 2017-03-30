import React from 'react';

export default function todo({todo, remove}){
  return (
    <li>
      <span className="form-list__item">{todo.text}</span>
      <button className="form-list__button" onClick={() => {remove(todo.id)}}>Remove</button>
    </li>
  );
}