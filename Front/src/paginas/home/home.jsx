import React from 'react';
import Header from '../../componentes/header/header';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="conteudo-home">
        <h1>Med Manager</h1>
        <img className="logo" src="/logo.svg" alt="Logo do Med Manager" />
      </div>
    </div>
  );
}

export default Home;
