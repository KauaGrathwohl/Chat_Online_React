import React from 'react';
import './input.css';

function Input(props) {

  const { value, onChange, onKeyDown } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Nome de usuário"
    />
  );
}

export default Input;