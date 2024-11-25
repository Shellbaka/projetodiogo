import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Certifique-se de que o CSS tenha o mesmo nome ou seja importado corretamente

function Login() {
  const [formData, setFormData] = useState({
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
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/inicio'); // Redireciona para a página principal
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
        <h2>Fazer Login</h2>
        <p>Conecte-se à sua conta</p>
        <div className="separator"></div>
      </div>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Entrar</button>
        </div>
      </form>
      <p>Não tem uma conta? <a href="/criar-conta">Cadastre-se</a></p>
    </div>
  );
}

export default Login;
