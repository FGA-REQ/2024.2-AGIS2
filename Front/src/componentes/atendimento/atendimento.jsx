import React, { useState, useEffect } from 'react';
import { salvarProntuario, buscarProntuarios, buscarPaciente } from '../../services/api';
import './atendimento.css';

function Atendimento() {
    const [busca, setBusca] = useState("");
    const [pacientes, setPacientes] = useState([]);
    const [pacienteSelecionado, setPacienteSelecionado] = useState(null);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [alergies, setAlergies] = useState("");
    const [recordText, setRecordText] = useState("");
    const [historico, setHistorico] = useState([]);
    const [date, setData] = useState(new Date().toISOString().split('T')[0]);
    const [visualizando, setVisualizando] = useState(null);

    
    // No useEffect
    useEffect(() => {
        buscarPaciente()
            .then((res) => {
                const filtrados = res.data.filter((p) =>
                    p.name.toLowerCase().includes(busca.toLowerCase())
                );
                console.log(filtrados);
                setPacientes(filtrados);
            })
            .catch((err) => console.error("Erro ao buscar pacientes:", err));
    }, [busca]);
    
    

    // Buscar prontuários quando um paciente for selecionado
    useEffect(() => {
        if (pacienteSelecionado) {
            console.log(pacienteSelecionado.CPF);
            
            buscarProntuarios(pacienteSelecionado.CPF)
                .then((res) => setHistorico(res.data))
                .catch((err) => console.error("Erro ao buscar prontuários:", err));
        }
    }, [pacienteSelecionado]);

    const selecionarPaciente = (paciente) => {
        setPacienteSelecionado(paciente);
        setWeight("");
        setHeight("");
        setAge("");
        setAlergies("");
        setRecordText("");
    };

    const salvar = async () => {
        if (!recordText.trim()) return alert("O prontuário não pode estar vazio!");

        const novoProntuario = {
            patientCPF: pacienteSelecionado.CPF,
            date,
            weight,
            age,
            height,
            alergies,
            recordText,
            doctorCRM: "123786-SP",
        };

        try {
            console.log(novoProntuario);
            await salvarProntuario(novoProntuario);
            alert("Prontuário salvo com sucesso!");
            setRecordText("");
            buscarProntuarios(pacienteSelecionado.CPF).then((res) => setHistorico(res.data));
        } catch (err) {
            console.error("Erro ao salvar prontuário:", err);
            alert("Erro ao salvar prontuário.");
        }
    };

    return (
        <div className="atendimento">
            {/* Busca de Pacientes */}
            <div className="busca-container">
                <label>Buscar Paciente:</label>
                <input
                    type="text"
                    placeholder="Digite o nome"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
                {busca && pacientes.length > 0 && (
                    <div className="lista-pacientes">
                        {pacientes.map((paciente) => (
                            <div key={paciente.id} onClick={() => selecionarPaciente(paciente)}>
                                {paciente.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Detalhes do Paciente */}
            {pacienteSelecionado && (
                <div className="detalhes-paciente">
                    <h3>{pacienteSelecionado.name}</h3>
                    <div className="linha-dados">
                        <div className="campo-prontuario">
                            <label>Data:</label>
                            <input type="date" value={date} onChange={(e) => setData(e.target.value)} />
                        </div>
                        <div className="campo-prontuario">
                            <label>Peso (kg):</label>
                            <input type="text" value={weight}
                                onChange={(e) => setWeight(e.target.value.replace(/[^0-9.,]/g, ''))}
                                placeholder="Peso atual do paciente" />
                        </div>
                        <div className="campo-prontuario">
                            <label>Altura (m):</label>
                            <input type="text" value={height}
                                onChange={(e) => setHeight(e.target.value.replace(/[^0-9.,]/g, ''))}
                                placeholder="Altura atual do paciente" />
                        </div>
                        <div className="campo-prontuario">
                            <label>Idade:</label>
                            <input type="text" value={age}
                                onChange={(e) => setAge(e.target.value.replace(/\D/g, ''))}
                                placeholder="Idade atual do paciente" />
                        </div>
                        <div className="campo-prontuario">
                            <label>Alergias:</label>
                            <input type="text" value={alergies}
                                onChange={(e) => setAlergies(e.target.value)}
                                placeholder="Escreva todas as alergias detalhadas" />
                        </div>
                    </div>
                    <div className="prontuario-container">
                        <label>Prontuário:</label>
                        <textarea
                            value={recordText}
                            onChange={(e) => setRecordText(e.target.value)}
                            placeholder="Descreva o atendimento"
                            rows="10"
                        />
                    </div>
                    <div className="botao-salvar-prontuario">
                    <button onClick={salvar}>Salvar</button>
                    </div>
                </div>
            )}

            {/* Histórico de Prontuários */}
            {pacienteSelecionado && historico.length > 0 && (
                <div className="historico-prontuario">
                    <h4>Histórico de Prontuários</h4>
                    <ul>
                        {historico.map((p, index) => (
                            <button key={index} onClick={() => setVisualizando(p)}>
                                {new Date(p.date).toLocaleDateString('pt-BR')}
                            </button>
                        ))}
                    </ul>
                </div>
            )}

            {/* Modal de Visualização do Prontuário */}
            {visualizando && (
                <div className="modal-prontuario">
                    <h3>Detalhes do Prontuário</h3>
                    <div className="prontuario-detalhado">
                        <p><strong>Nome:</strong> {pacienteSelecionado.name}</p>
                        <p><strong>Especialidade:</strong> {especialidade}</p>
                        <p><strong>Médico:</strong> {medico}</p>
                        <p className='detalhe-espaco'><strong>Data:</strong> {new Date(visualizando.date).toLocaleDateString('pt-BR')}</p>
                        <p><strong>Peso:</strong> {visualizando.weight} kg</p>
                        <p><strong>Altura:</strong> {visualizando.height} m</p>
                        <p><strong>Idade:</strong> {visualizando.age}</p>
                        <p><strong>Alergias:</strong> {visualizando.alergies}</p>
                        <p><strong>Descrição:</strong></p>
                        <div className='descricao-box'>{visualizando.recordText.split('\n').map((line, index) => (
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
    