import React from "react";

function Button(props) {

  console.log(props);

  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  );
}

function Chat(props) {
  function handleClick() {
    console.log('handleClick')
  }

  return (
    <Button onClick={handleClick}>
      botao1
    </Button>
  );
}

export default Chat