import React from 'react';
import Button from '../../button/button';

export default function TodoForm(data) {

  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />

      <Button onClick={() => {
        this.props.addTodo(input.value);
        input.value = '';
      }} />
    </div>
  );

}