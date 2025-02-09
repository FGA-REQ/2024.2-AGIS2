import React, { useState, useEffect } from 'react';
import './atendimento.css';

const pacientesMock = [
    { id: 1, nome: "João Silva", idade: "", peso: "", altura: "", alergias: "" },
    { id: 2, nome: "Maria Souza Leite Gomes", idade: "", peso: "", altura: "", alergias: "" },
    { id: 3, nome: "Carlos Oliveira", idade: "", peso: "", altura: "", alergias: "" },
];

function Atendimento() {
    const [busca, setBusca] = useState("");
    const [pacientes, setPacientes] = useState(pacientesMock);
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [idade, setIdade] = useState("");
    const [alergias, setAlergias] = useState("");
    const [prontuario, setProntuario] = useState("");
    const [historico, setHistorico] = useState({});
    const [visualizando, setVisualizando] = useState(null);
    const [data, setData] = useState(new Date().toISOString().split('T')[0]);

    const formatarData = (data) => {
        const date = new Date(data);
        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const ano = date.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    useEffect(() => {
        setPeso(pacienteSelecionado?.peso || "");
        setAltura(pacienteSelecionado?.altura || "");
        setIdade(pacienteSelecionado?.idade || "");
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
                { data, peso, altura, idade, alergias, descricao: prontuario },
            ],
        };
        setHistorico(novoHistorico);
        setProntuario("");
        setPeso("");
        setAltura("");
        setIdade("");
        setAlergias("");
        alert("Prontuário salvo com sucesso!");
    };

    // Nome e especialidade do médico logado
    const medico = "Maria Clara";
    const especialidade = "Oftal";

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
                            <input type="text" value={peso}
                                onChange={(e) => setPeso(e.target.value.replace(/[^0-9.,]/g, ''))}
                                placeholder="Peso atual do paciente" />

                        </div>
                        <div className="campo-prontuario">
                            <label>Altura (m):</label>
                            <input type="text" value={altura}
                                onChange={(e) => setAltura(e.target.value.replace(/[^0-9.,]/g, ''))}
                                placeholder="Altura atual do paciente" />

                        </div>
                        <div className="campo-prontuario">
                            <label>Idade:</label>
                            <input type="text" value={idade}
                                onChange={(e) => setIdade(e.target.value.replace(/\D/g, ''))}
                                placeholder="Idade atual do paciente" />
                        </div>
                    </div>
                    <div className="campo-prontuario">
                        <label>Alergias:</label>
                        <input type="text" value={alergias}
                            onChange={(e) => setAlergias(e.target.value)}
                            placeholder="Escreva todas as alergias detalhadas" />
                    </div>
                    <div className="prontuario-container">
                        <label>Prontuário:</label>
                        <textarea
                            value={prontuario}
                            onChange={(e) => setProntuario(e.target.value)}
                            placeholder="Descreva o atendimento"
                            rows="30"
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
                            <button key={index} onClick={() => setVisualizando(p)}>
                                {new Date(p.data).toLocaleDateString('pt-BR')}
                            </button>
                        ))}
                    </ul>

                </div>
            )}

            {visualizando && (
                <div className="modal-prontuario">
                    <h3>Detalhes do Prontuário</h3>
                    <div className="prontuario-detalhado">
                        <p><strong>Nome:</strong> {pacienteSelecionado.nome}</p>
                        <p><strong>Especialidade:</strong> {especialidade}</p>
                        <p><strong>Médico:</strong> {medico}</p>
                        <p className='detalhe-espaco'><strong>Data:</strong> {formatarData(visualizando.data)}</p>
                        <p><strong>Peso:</strong> {visualizando.peso} kg</p>
                        <p><strong>Altura:</strong> {visualizando.altura} m</p>
                        <p><strong>Idade:</strong> {visualizando.idade} anos</p>
                        <p><strong>Alergias:</strong> {visualizando.alergias}</p>
                        <p className='detalhe-espaco'><strong>Descrição:</strong></p>
                        <div className='descricao-box'>{visualizando.descricao.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}</div>
                    </div>
                    <button className='btn-fechar-prontuario' onClick={() => setVisualizando(null)}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default Atendimento;