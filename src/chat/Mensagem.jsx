import React from 'react';

function Mensagem({ atendente, texto }) {
  const tipo = atendente ? 'atendente' : 'aluno';

  return (
    <div>
      <div className={`msg-${tipo}`}>
        <strong>{atendente ? 'Atendente' : 'Você'}</strong>
      </div>
      <div className={`msg mensagem-${tipo}`}>
        {texto}
      </div>
    </div>
  );
}

export default Mensagem;