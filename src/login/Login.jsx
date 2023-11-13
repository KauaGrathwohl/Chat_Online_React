import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username?.trim() !== '') {
      navigate('/chat');
      notification.success({
        message: 'Sucesso!',
        description: `Bem vindo, ${username}`,
      });
    } else {
      notification.error({
        message: 'Erro!',
        description: 'Nome de usuário inválido',
      });
    }
  };

  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
      event.preventDefault();
      handleLogin();
    }
  };

  return (
    <div className='login-card'>
      <div className='login-title'>
        Login
      </div>
      <div className='login-username'>
        <Input
          placeholder='Nome de usuário'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className='login-button'>
        <Button type="submit"
          onClick={handleLogin}>
          Entrar
        </Button>
      </div>
    </div>
  );
}

export default Login;
