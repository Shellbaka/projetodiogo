import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/inicio" className="navbar-brand">
          Reciclub
        </NavLink>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/score" className="navbar-link">
              Score
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/sobre" className="navbar-link">
              Sobre nós
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/conta" className="navbar-link">
              Criar conta
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/login" className="navbar-link">
              Login
            </NavLink>
          </li>
          {/* Exibir informações do usuário ou mercado se estiver logado */}
          {user && (
            <li className="navbar-item">
              <span className="navbar-link">
                {user.tipo === 'usuario' ? `Usuário: ${user.nome}` : `Mercado: ${user.nome}`}
              </span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
