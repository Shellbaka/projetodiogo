import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar para navegação
import './Login.css'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realiza a requisição para o backend para autenticar o usuário
      const response = await fetch('http://localhost:8000/login', { // Criar o endpoint /login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login realizado com sucesso!');
        navigate('/body'); // Redireciona para a página principal (Body.jsx)
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      alert('Erro ao tentar fazer login.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
}
