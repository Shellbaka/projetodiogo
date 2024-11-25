import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CriarConta.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    tipo: '', // Tipo: Usuário ou Mercado
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData); // Verifique o conteúdo de formData

    try {
      const response = await fetch('http://localhost:8000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/inicio'); // Navega para a página inicial após sucesso
      } else {
        alert(data.error || 'Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário.');
    }
  };

  return (
    <div className="login-box">
      <div className="header">
        <h2>Cadastrar</h2>
        <p>Crie sua conta</p>
        <div className="separator"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Nome"
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

        {/* Botões de tipo (Usuário ou Mercado) */}
        <div className="tipo-container">
          <button
            type="button"
            className={`tipo-button ${formData.tipo === 'usuario' ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, tipo: 'usuario' })}
          >
            Usuário
          </button>
          <button
            type="button"
            className={`tipo-button ${formData.tipo === 'mercado' ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, tipo: 'mercado' })}
          >
            Mercado
          </button>
        </div>

        <div className="button-group">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      <p>Já tem uma conta? <a href="/login">Faça login</a></p>
    </div>
  );
}

export default Cadastro;
