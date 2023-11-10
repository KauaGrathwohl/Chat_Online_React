import React from 'react';
import './input.css';

function Input(props) {

  return (
    <input {...props}
      type={props.type || 'text'}
      className='input' />
  );
}

export default Input;