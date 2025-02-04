import React, { useState } from 'react';
import './header2.css';

function Header2({ toggleSidebar }) {
    const [menuAberto, setMenuAberto] = useState(false);

    const handleMenuToggle = () => {
        setMenuAberto(!menuAberto);
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <header className="header2">

            <div className="menu-icon" onClick={toggleSidebar}>
                ☰ {/* Ícone de hambúrguer */}
            </div>

            <div className="conteudo-header-admin">
                <img className="logo-header-admin" src="/logo.svg" alt="Logo do Med Manager" />
                <h1>Med Manager</h1>
            </div>

            <div className="infos-header2">
                <img
                    src="user.svg"
                    alt="Ícone de usuário"
                    className="user-icon-header2"
                    onClick={handleMenuToggle}
                />
                {menuAberto && (
                    <div className="menu-dropdown">
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header2;
