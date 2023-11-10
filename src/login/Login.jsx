import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username?.trim() !== '' && password?.trim() !== '') {
      navigate('/chat');
      notification.success({
        message: 'Sucesso!',
        description: `Bem vindo, ${username}`,
      });
    } else {
      notification.error({
        message: 'Erro!',
        description: 'Login e/ou senha inválidos',
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
    <div className="container">
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
      <div className='login-password'>
        <Input
          placeholder='Senha'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
