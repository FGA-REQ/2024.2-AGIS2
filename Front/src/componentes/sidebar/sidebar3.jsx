import React, { useState, useEffect } from 'react';
import './sidebar3.css';
import { useNavigate } from 'react-router-dom';

function Sidebar3({ setConteudo }) {
    const navigate = useNavigate();

    const [tempo, setTempo] = useState(0);  // Tempo atual do cronômetro
    const [tempoGasto, setTempoGasto] = useState(null);  // Tempo salvo após a parada
    const [rodando, setRodando] = useState(false);  // Estado que verifica se o cronômetro está rodando
    const [intervalo, setIntervalo] = useState(null);  // Armazena o intervalo para controlar o cronômetro

    const [sidebarVisivel, setSidebarVisivel] = useState(false);

    const handleMenuClick = (menu) => {
        setConteudo(menu); // Atualizar o conteúdo exibido
    };

    const logout = () => {
        navigate("/");
    };

    // Função para formatar o tempo no formato mm:ss
    const formatarTempo = (tempo) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    };

    // Função para iniciar o cronômetro
    const iniciarCronometro = () => {
        if (!rodando) {
            setRodando(true);
            const novoIntervalo = setInterval(() => {
                setTempo((prevTempo) => prevTempo + 1);
            }, 1000);
            setIntervalo(novoIntervalo);
        }
    };

    // Função para parar o cronômetro
    const pararCronometro = () => {
        setRodando(false);
        clearInterval(intervalo);
        setTempoGasto(tempo); // Salva o tempo atual antes de zerar
        setTempo(0); // Zera o cronômetro
    };

    const toggleSidebar = () => {
        setSidebarVisivel(!sidebarVisivel);
    };

    return (
        <div className="sidebar">
            <div className="header-sidebar">
                <h1>Med Manager</h1>
                <ul className="menu-sidebar">
                    <li onClick={() => handleMenuClick('Início')}>Início</li>
                    <li onClick={() => handleMenuClick('Agenda')}>Agenda</li>
                    <li onClick={() => handleMenuClick('Atendimento')}>Atendimento</li>
                    <li onClick={() => handleMenuClick('Receita')}>Receita</li>
                    <li onClick={() => handleMenuClick('Histórico')}>Histórico</li>

                </ul>
            </div>

            {/* Cronômetro */}
            <div className="cronometro-sidebar">
                <div className="cronometro">
                    <h3>Duração da Consulta</h3>
                    <div className="tempo">{formatarTempo(tempo)}</div>
                    <div className="botoes">
                        {!rodando ? (
                            <button onClick={iniciarCronometro}>Iniciar Consulta</button>
                        ) : (
                            <button onClick={pararCronometro}>Parar Consulta</button>
                        )}
                    </div>
                    {/* Exibindo o tempo gasto ao parar */}
                    {tempoGasto !== null && (
                        <div className="tempo-gasto">
                            <p>Tempo Gasto: {formatarTempo(tempoGasto)}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="footer-sidebar">
                <img className="icon-sair" src="sair.svg" alt="Icon de logout" title='Sair'
                onClick={logout} />
            </div>
        </div>
    );
}

export default Sidebar3;
