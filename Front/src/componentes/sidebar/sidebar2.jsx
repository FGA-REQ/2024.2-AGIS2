// sidebar de paciente

import React from 'react';
import './sidebar2.css';
import { useNavigate } from 'react-router-dom';

function Sidebar2 ({ setConteudo }) {

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
                    <li onClick={() => handleMenuClick('Consultas')}>Consultas</li>
                    <li onClick={() => handleMenuClick('Remédios')}>Remédios</li>
                </ul>
            </div>
            <div className="footer-sidebar">
          <img className='icon-sair' src='sair.svg' alt="Icon de logout" title="Sair"
          onClick={logout}/>
        </div>
        </div>
    );
}

export default Sidebar2;
