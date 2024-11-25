import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CriarConta.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // Hook para navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/login'); // Redireciona para a página de login
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário.');
    }
  };

  return (

    <div className="login-box">
      <div className="header">
        <h2>Criar uma nova conta</h2>
        <p>Sua conta em poucos passos.</p>
        <div className="separator"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Nome de Usuário"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Cadastre-se</button>
        </div>
      </form>
      <p>Já tem uma conta? <a href="/login">Login</a></p>
    </div>

  );
}

export default Cadastro;
