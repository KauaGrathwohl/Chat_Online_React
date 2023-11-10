import React from 'react';
import Mensagem from './Mensagem';

function ListaMensagens({ mensagens }) {

  return (
    <div className='chat-mensagem'>
      {mensagens?.map((msg, i) => (
        <Mensagem key={i}
          atendente={msg.atendente}
          texto={msg.texto} />
      ))}
    </div>
  );
}

export default ListaMensagens;