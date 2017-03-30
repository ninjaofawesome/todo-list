import React from 'react';

export default function header({todoCount}){
  return <h1 className="form__title">to-do ({todoCount})</h1>;
}