import React from 'react';

export default function todoForm({addTodo}){

  let input;
  return (
    <div className="form__input">
      <input ref={node => {
        input = node;
      }} />
      <button className="form__button--submit" onClick={() =>{
        addTodo(input.value);
        input.value ='';
      }}>Add</button>
    </div>
  );
};