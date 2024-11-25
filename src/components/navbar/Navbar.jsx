import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navb() {
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
        </ul>
      </div>
    </nav>
  );
}
