import React from 'react';
import './input.css';

function Input(props) {

  return (
    <input
      type="text"
      placeholder="Nome de usuário"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;