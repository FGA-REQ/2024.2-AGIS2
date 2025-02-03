// Header do Home

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const navigate = useNavigate();

  const CliqueBtnLogin = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="container-header">
        <img className="logo-header" src="/logo.svg" alt="Logo do Med Manager" />
        <button
          onClick={CliqueBtnLogin}
          className="btn-login-header"> Login </button>
      </div>
    </header>
  );
}

export default Header;
