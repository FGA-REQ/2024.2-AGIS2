// Header depois do Login

import React from 'react';
import './header2.css';

function Header2({ toggleSidebar }) {
    return (
        <header className="header2">
            {/* Botão hambúrguer */}
            <div className="menu-icon" onClick={toggleSidebar}>
                ☰ {/* Ícone de hambúrguer */}
            </div>

            {/* Centralização da logo e título */}
            <div className="conteudo-header-admin">
                <img className="logo-header-admin" src="/logo.svg" alt="Logo do Med Manager" />
                <h1>Med Manager</h1>
            </div>

            {/* Informações do usuário */}
            <div className="infos-header2">
                <img src="user.svg" alt="Ícone de usuário" className="user-icon-medicos" />
            </div>
        </header>
    );
}

export default Header2;
