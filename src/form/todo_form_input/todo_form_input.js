import React from 'react';

export default function todoForm({addTodo}){

  let input;
  return (
    <div className="form__input" >
      <input className="form__input-field"  ref={node => {
        input = node;
      }} />
      <button className="form__button" onClick={() =>{
        addTodo(input.value);
        input.value ='';
      }}>add</button>
    </div>
  );
};