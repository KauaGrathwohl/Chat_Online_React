import React, { useState } from 'react';
import Input from '../components/input/Input';
import Button from '../components/button/Button';

function Footer({ onSubmit }) {
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof mensagem !== 'string' || mensagem.trim() === '') {
      //adicionar alerta
      console.log('Mensagem inválida');
      return;
    }

    setMensagem('');
    onSubmit?.(mensagem);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <div className='input-box'>
      <form style={{ width: '100%' }}
        onSubmit={handleSubmit}>
        <Input value={mensagem}
          style={{ width: '75%' }}
          placeholder='Digite sua mensagem...'
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={handleKeyDown} />
        <Button type='submit'
          style={{ width: '23%' }}>
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Footer;