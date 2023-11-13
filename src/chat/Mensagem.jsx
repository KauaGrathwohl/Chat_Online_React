import React from 'react';

function Mensagem({ atendente, texto }) {
  const tipo = atendente ? 'atendente' : 'aluno';

  return (
    <div>
      <div className={`chat-msg-${tipo}`}>
        <strong>{atendente ? 'Atendente' : 'Você'}</strong>
      </div>
      <div className={`chat-msg chat-msg-text-${tipo}`}>
        {texto}
      </div>
    </div>
  );
}

export default Mensagem;