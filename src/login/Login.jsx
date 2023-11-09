import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const Navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() !== '') {
      alert(`Bem-vindo ${username}!`);
      Navigate('/chat');

    } else {
      alert('Por favor, insira um nome de usuário válido.');
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
      <h1>Login</h1>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button type="submit" onClick={handleLogin} />
    </div>
  );
}

export default Login;
