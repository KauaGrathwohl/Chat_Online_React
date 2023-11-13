import React, { useEffect, useRef } from 'react';
import Mensagem from './Mensagem';

function ListaMensagens({ mensagens }) {
  const mensagensRef = useRef(null);

  useEffect(() => {
    if (mensagensRef.current) {
      mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
    }
  }, [mensagens]);

  return (
    <div className='chat-mensagem'
      ref={mensagensRef}>
      <div style={{ maxHeight: '55vh' }}>
        {mensagens?.map((msg, i) => (
          <Mensagem key={i}
            atendente={msg.atendente}
            texto={msg.texto} />
        ))}
      </div>
    </div>
  );
}

export default ListaMensagens;