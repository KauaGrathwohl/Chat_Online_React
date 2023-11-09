import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleLogin = () => {

    if (username.trim() !== '') {

      alert(`Bem-vindo, ${username}!`);
      history.push('/chat');
    } else {

      alert('Por favor, insira um nome de usuário válido.');
    }
  };

  return (
    <div className="container">

      <h1>Login</h1>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button onClick={handleLogin} />

    </div>
  );
}

export default LoginPage;
