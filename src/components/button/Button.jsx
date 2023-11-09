import React from 'react';
import './button.css';

function Button(props) {

  return (
    <button onClick={props.onClick}>Entrar</button>
  );
}

export default Button;