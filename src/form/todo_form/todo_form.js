import React from 'react';

export default function TodoForm({addTodo}) {

  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />

      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}> + </button>
    </div>
  );

}