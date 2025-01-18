import './medico.css';
import React, { useState } from 'react';
import Header2 from '../../componentes/header/header2';
import Inicio from '../../componentes/inicio/inicio';
import Sidebar3 from '../../componentes/sidebar/sidebar3';
import Receita from '../../componentes/receita/receita';

function Medico() {
    const [conteudo, setConteudo] = useState('Inicio');
    const [sidebarVisivel, setSidebarVisivel] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisivel(!sidebarVisivel);
    };

    const getConteudo = () => {
        switch (conteudo) {
            case 'Receita':
                return <Receita />
            case 'Prontuário':
                return <h1>R</h1>
            default:
                return <Inicio />;
        }
    };

    return (
        <div className="medico">
            {sidebarVisivel && <Sidebar3 setConteudo={setConteudo} />}
            <div className={`conteudo-admin ${sidebarVisivel ? 'with-sidebar' : ''}`}>
                <Header2 toggleSidebar={toggleSidebar} />
                <div className="principal-admin">
                    {getConteudo()}
                </div>
            </div>
        </div>
    );
}

export default Medico;
