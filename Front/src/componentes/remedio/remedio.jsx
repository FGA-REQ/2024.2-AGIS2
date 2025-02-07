import React, { useState } from 'react';
import './remedio.css';

function Remedio() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [remedios, setRemedios] = useState([]);
    const [editarId, setEditarId] = useState(null);

    // Estados para os campos do formulário
    const [nome, setNome] = useState("");
    const [localDeAcao, setLocalDeAcao] = useState("");
    const [quantidadeDias, setQuantidadeDias] = useState(1);
    const [quantidadeHoras, setQuantidadeHoras] = useState(1);

    // Função para adicionar ou editar remédio
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editarId !== null) {
            // Atualiza um remédio existente
            setRemedios(
                remedios.map((r) =>
                    r.id === editarId ? { id: editarId, nome, localDeAcao, quantidadeDias, quantidadeHoras } : r
                )
            );
            setEditarId(null);
        } else {
            // Adiciona um novo remédio
            const novoRemedio = {
                id: Date.now(),
                nome,
                localDeAcao,
                quantidadeDias,
                quantidadeHoras,
            };
            setRemedios([...remedios, novoRemedio]);
        }

        // Limpar campos e esconder formulário
        setNome("");
        setLocalDeAcao("");
        setQuantidadeDias("");
        setQuantidadeHoras("");
        setMostrarFormulario(false);
    };

    // Função para deletar remédio
    const deletarRemedio = (id) => {
        setRemedios(remedios.filter((r) => r.id !== id));
    };

    // Função para editar um remédio
    const editarRemedio = (remedio) => {
        setEditarId(remedio.id);
        setNome(remedio.nome);
        setLocalDeAcao(remedio.localDeAcao);
        setQuantidadeDias(remedio.quantidadeDias);
        setQuantidadeHoras(remedio.quantidadeHoras);
        setMostrarFormulario(true);
    };

    return (
        <div className="cadastro-remedio">
            <button className="btn-adicionar" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                + Remédio
            </button>

            {mostrarFormulario && (
                <form className="form-cadastro" onSubmit={handleSubmit}>
                    <div className="campo">
                        <label>Nome do Remédio</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </div>

                    <div className="campo">
                        <label>Local de Ação</label>
                        <input type="text" value={localDeAcao} onChange={(e) => setLocalDeAcao(e.target.value)} required />
                    </div>

                    <div className="campo">
                        <label>Quantidade de Dias</label>
                        <input
                            type="number"
                            value={quantidadeDias}
                            onChange={(e) => setQuantidadeDias(Math.max(1, e.target.value))}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Intervalo entre Doses (horas)</label>
                        <input
                            type="number"
                            value={quantidadeHoras}
                            onChange={(e) => setQuantidadeHoras(Math.max(1, e.target.value))}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-submit">{editarId ? "Atualizar" : "Cadastrar"}</button>
                </form>
            )}

            {/* Lista de Remédios */}
            <div className="remedios-lista">
                {remedios.map((remedio) => (
                    <div key={remedio.id} className="remedio-item">
                        <div className="remedio-info">
                            <span><strong>{remedio.nome}</strong></span>
                            <span>Local: {remedio.localDeAcao}</span>
                            <span>Duração: {remedio.quantidadeDias} dias</span>
                            <span>Intervalo: {remedio.quantidadeHoras}h</span>
                        </div>
                        <div className="remedio-acoes">
                            <img src="lapis.svg" alt="Editar" className="icon" onClick={() => editarRemedio(remedio)} />
                            <img src="lixo.svg" alt="Deletar" className="icon" onClick={() => deletarRemedio(remedio.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Remedio;
