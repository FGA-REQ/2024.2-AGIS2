import React, { useState, useEffect } from 'react';
import './atendimento.css';

const pacientesMock = [
    { id: 1, nome: "João Silva", idade: 45, peso: "", altura: "", alergias: "" },
    { id: 2, nome: "Maria Souza Leite Gomes", idade: 30, peso: "", altura: "", alergias: "" },
    { id: 3, nome: "Carlos Oliveira", idade: 50, peso: "", altura: "", alergias: "" },
];

function Atendimento() {
    const [busca, setBusca] = useState("");
    const [pacientes, setPacientes] = useState(pacientesMock);
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [alergias, setAlergias] = useState("");
    const [prontuario, setProntuario] = useState("");
    const [historico, setHistorico] = useState({});
    const [visualizando, setVisualizando] = useState(null);
    const [data, setData] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        setPeso(pacienteSelecionado?.peso || "");
        setAltura(pacienteSelecionado?.altura || "");
        setAlergias(pacienteSelecionado?.alergias || "");
    }, [pacienteSelecionado]);

    const selecionarPaciente = (paciente) => {
        setPacienteSelecionado(paciente);
        setProntuario("");
        setVisualizando(null);
        setBusca("");
    };

    const salvarProntuario = () => {
        if (!prontuario.trim()) return;
        const novoHistorico = {
            ...historico,
            [pacienteSelecionado.id]: [
                ...(historico[pacienteSelecionado.id] || []),
                { data, descricao: prontuario },
            ],
        };
        setHistorico(novoHistorico);
        setProntuario("");
    };

    return (
        <div className="atendimento">
            <div className="busca-container">
                <label>Buscar Paciente:</label>
                <input
                    type="text"
                    placeholder="Digite o nome"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
                {busca && (
                    <div className="lista-pacientes">
                        {pacientes
                            .filter((p) => p.nome.toLowerCase().includes(busca.toLowerCase()))
                            .map((paciente) => (
                                <div key={paciente.id} onClick={() => selecionarPaciente(paciente)}>
                                    {paciente.nome}
                                </div>
                            ))}
                    </div>
                )}
            </div>

            {pacienteSelecionado && (
                <div className="detalhes-paciente">
                    <h3>{pacienteSelecionado.nome}</h3>
                    <div className="linha-dados">
                        <div className="campo-prontuario">
                            <label>Data:</label>
                            <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
                        </div>
                        <div className="campo-prontuario">
                            <label>Peso (kg):</label>
                            <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
                        </div>
                        <div className="campo-prontuario">
                            <label>Altura (m):</label>
                            <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
                        </div>
                    </div>
                    <div className="campo-prontuario">
                        <label>Alergias:</label>
                        <input type="text" value={alergias} onChange={(e) => setAlergias(e.target.value)} />
                    </div>
                    <div className="prontuario-container">
                        <label>Prontuário:</label>
                        <textarea
                            value={prontuario}
                            onChange={(e) => setProntuario(e.target.value)}
                            placeholder="Descreva o atendimento"
                            rows="10"
                        />
                    </div>
                    <div className="campo-prontuario" style={{ textAlign: 'center' }}>
                        <button onClick={salvarProntuario} className="botao-salvar-prontuario">Salvar</button>
                    </div>
                </div>
            )}

            {pacienteSelecionado && (
                <div className="historico-prontuario">
                    <h4>Histórico de Prontuários</h4>
                    <ul>
                        {(historico[pacienteSelecionado.id] || []).map((p, index) => (
                            <li key={index} onClick={() => setVisualizando(p)}>
                                {p.data}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {visualizando && (
                <div className="modal-prontuario">
                    <h3>Detalhes do Prontuário</h3>
                    <div className="prontuario-detalhado">
                        <p><strong>Data:</strong> {visualizando.data}</p>
                        <p>{visualizando.descricao}</p>
                    </div>
                    <button onClick={() => setVisualizando(null)}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default Atendimento;
