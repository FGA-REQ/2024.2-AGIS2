// Sidebar Médico

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar3({ setConteudo }) {
    const navigate = useNavigate();
    const [sidebarVisivel, setSidebarVisivel] = useState(false);

    const handleMenuClick = (menu) => {
        setConteudo(menu); // Atualizar o conteúdo exibido
    };

    const logout = () => {
        navigate("/");
    };


    const toggleSidebar = () => {
        setSidebarVisivel(!sidebarVisivel);
    };

    return (
        <div className="sidebar">
            <div className="header-sidebar">
                <h1>Menu </h1>
                <ul className="menu-sidebar">
                    <li onClick={() => handleMenuClick('Início')}>Início</li>
                    <li onClick={() => handleMenuClick('Agenda')}>Agenda</li>
                    <li onClick={() => handleMenuClick('Atendimento')}>Atendimento</li>
                    <li onClick={() => handleMenuClick('Receita')}>Receita</li>
                </ul>
            </div>

            <div className="footer-sidebar">
                <img className="icon-sair" src="sair.svg" alt="Icon de logout" title='Sair'
                onClick={logout} />
            </div>
        </div>
    );
}

export default Sidebar3;
