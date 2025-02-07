import './admin.css';
import React, { useState } from 'react';
import Sidebar from '../../componentes/sidebar/sidebar';
import Header2 from '../../componentes/header/header2';
import Cadastro from '../../componentes/cadastro/cadastro';
import ListaMedicos from '../../componentes/listas/listaMedicos';
import ListaPacientes from '../../componentes/listas/listaPacientes';
import ListaPlanosSaude from '../../componentes/listas/listaPlanosSaude'; // Importando ListaPlanosSaude
import Inicio from '../../componentes/inicio/inicio';
import Agenda from '../../componentes/agenda/agenda';
import Dashboard from '../../componentes/dashboard/dashboard';

function Admin() {
    const [conteudo, setConteudo] = useState('Inicio');
    const [sidebarVisivel, setSidebarVisivel] = useState(false);
    const [medicoEditado, setMedicoEditado] = useState(null);
    const [pacienteEditado, setPacienteEditado] = useState(null);
    const [planoEditado, setPlanoEditado] = useState(null); // Adicionando o estado para plano editado

    const toggleSidebar = () => {
        setSidebarVisivel(!sidebarVisivel);
    };

    const handleEditarMedico = (medico) => {
        setMedicoEditado(medico);
        setConteudo('Cadastro');
    };

    const handleEditarPaciente = (paciente) => {
        setPacienteEditado(paciente);
        setConteudo('Cadastro');
    };

    const handleEditarPlano = (plano) => {
        setPlanoEditado(plano);
        setConteudo('Cadastro');
    };

    const handleSalvarMedico = (medicoAtualizado) => {
        console.log('Médico atualizado:', medicoAtualizado);
        setMedicoEditado(null);
    };

    const handleSalvarPaciente = (pacienteAtualizado) => {
        console.log('Paciente atualizado:', pacienteAtualizado);
        setPacienteEditado(null);
    };

    const handleSalvarPlano = (planoAtualizado) => {
        console.log('Plano de Saúde atualizado:', planoAtualizado);
        setPlanoEditado(null);
    };

    const getConteudo = () => {
        switch (conteudo) {
            case 'Médicos':
                return <ListaMedicos onEditarMedico={handleEditarMedico} />;
            case 'Pacientes':
                return <ListaPacientes onEditarPaciente={handleEditarPaciente} />;
            case 'Planos de Saúde': 
                return <ListaPlanosSaude onEditarPlano={handleEditarPlano} />;
            case 'Agenda':
                return <Agenda />
            case 'Dashboard':
                    return <Dashboard />
            case 'Cadastro':
                return (
                    <Cadastro
                        medicoEditado={medicoEditado}
                        pacienteEditado={pacienteEditado}
                        planoEditado={planoEditado} // Passando o planoEditado
                        onSalvarMedico={handleSalvarMedico}
                        onSalvarPaciente={handleSalvarPaciente}
                        onSalvarPlano={handleSalvarPlano} // Adicionando o callback para salvar plano
                    />
                );
            default:
                return <Inicio />;
        }
    };

    return (
        <div className="admin">
            {sidebarVisivel && <Sidebar setConteudo={setConteudo} />}
            <div className={`conteudo-admin ${sidebarVisivel ? 'with-sidebar' : ''}`}>
                <Header2 toggleSidebar={toggleSidebar} />
                <div className="principal-admin">
                    {getConteudo()}
                </div>
            </div>
        </div>
    );
}

export default Admin;
