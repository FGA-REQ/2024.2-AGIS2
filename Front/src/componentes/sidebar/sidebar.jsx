// Sidebar Admin

import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar({ setConteudo }) {

  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setConteudo(menu); // Atualizar o conteúdo exibido

  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <h1>Menu</h1>
        <ul className="menu-sidebar">
          <li onClick={() => handleMenuClick('Início')}>Início</li>
          <li onClick={() => handleMenuClick('Médicos')}>Médicos</li>
          <li onClick={() => handleMenuClick('Pacientes')}>Pacientes</li>
          <li onClick={() => handleMenuClick('Planos de Saúde')}>Planos</li>
          <li onClick={() => handleMenuClick('Agenda')}>Agenda</li>
          <li onClick={() => handleMenuClick('Cadastro')}>Cadastro</li>
        </ul>
      </div>
      <div className="footer-sidebar">
        <img className='icon-sair' src='sair.svg' alt="Icon de logout" title='Sair'
          onClick={logout} />
      </div>
    </div>
  );
}

export default Sidebar;
