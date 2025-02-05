import './paciente.css';
import React, { useState } from 'react';
import Header2 from '../../componentes/header/header2';
import Inicio from '../../componentes/inicio/inicio';
import Sidebar2 from '../../componentes/sidebar/sidebar2';
import Remedio from '../../componentes/remedio/remedio';
import Consulta from '../../componentes/consultas/consultas';

function Paciente() {
  const [conteudo, setConteudo] = useState('Inicio');
  const [sidebarVisivel, setSidebarVisivel] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisivel(!sidebarVisivel);
  };

  const getConteudo = () => {
    switch (conteudo) {
      case 'Consultas':
        return <Consulta />;
      case 'Remédios':
        return <Remedio />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="paciente">
      {sidebarVisivel && <Sidebar2 setConteudo={setConteudo} />}
      <div className={`conteudo-admin ${sidebarVisivel ? 'with-sidebar' : ''}`}>
        <Header2 toggleSidebar={toggleSidebar} />
        <div className="principal-admin">
          {getConteudo()}
        </div>
      </div>
    </div>
  );
}

export default Paciente;
