import React, { useState } from 'react';
import './receita.css';

function Receita() {
    // Estado para armazenar as informações da receita
    const [nomePaciente, setNomePaciente] = useState('');
    const [nomeMedico, setNomeMedico] = useState('');
    const [crmMedico, setCrmMedico] = useState('');
    const [dataReceita, setDataReceita] = useState('');
    const [receita, setReceita] = useState('');

    // Função para lidar com a mudança do nome do paciente
    const handleNomePacienteChange = (e) => {
        setNomePaciente(e.target.value);
    };

    // Função para lidar com a mudança do nome do médico
    const handleNomeMedicoChange = (e) => {
        setNomeMedico(e.target.value);
    };

    // Função para lidar com a mudança do CRM do médico
    const handleCrmMedicoChange = (e) => {
        setCrmMedico(e.target.value);
    };

    // Função para lidar com a mudança da data da receita
    const handleDataReceitaChange = (e) => {
        setDataReceita(e.target.value);
    };

    // Função para lidar com a mudança do conteúdo da receita
    const handleReceitaChange = (e) => {
        setReceita(e.target.value);
    };

    // Função para imprimir a receita
    const imprimirReceita = () => {
        const conteudoImpressao = document.getElementById('receita-impressao').innerHTML;
        const janelaImpressao = window.open('', '', 'height=500,width=800');
        janelaImpressao.document.write('<html><head><title>Receita Médica</title></head><body>');
        janelaImpressao.document.write(conteudoImpressao);
        janelaImpressao.document.write('</body></html>');
        janelaImpressao.document.close(); // Fecha o documento da janela
        janelaImpressao.print(); // Chama a impressão
    };

    return (
        <div className="receita">
            <div className="header-receita">
                <img className="logo-receita" src="/logo.svg" alt="Logo Med Manager" />
                <h2>Med Manager</h2>
            </div>

            <div className="form-receita">
                {/* Campos de informações do médico lado a lado */}
                <div className="campo-duplo">
                    <div className="campo">
                        <label>Nome do Médico:</label>
                        <input
                            type="text"
                            value={nomeMedico}
                            onChange={handleNomeMedicoChange}
                            placeholder="Nome do médico"
                        />
                    </div>
                    <div className="campo">
                        <label>CRM do Médico:</label>
                        <input
                            type="text"
                            value={crmMedico}
                            onChange={handleCrmMedicoChange}
                            placeholder="CRM do médico"
                        />
                    </div>
                </div>

                {/* Campos de informações do paciente lado a lado */}
                <div className="campo-duplo">
                    <div className="campo">
                        <label>Nome do Paciente:</label>
                        <input
                            type="text"
                            value={nomePaciente}
                            onChange={handleNomePacienteChange}
                            placeholder="Nome do paciente"
                        />
                    </div>
                    <div className="campo">
                        <label>Data da Receita:</label>
                        <input
                            type="date"
                            value={dataReceita}
                            onChange={handleDataReceitaChange}
                        />
                    </div>
                </div>

                <h3>Escreva a Receita</h3>
                <textarea
                    value={receita}
                    onChange={handleReceitaChange}
                    placeholder="Escreva aqui a receita médica"
                    rows="10"
                    cols="50"
                ></textarea>

                <div className="campo">
                    <button onClick={imprimirReceita} className="botao-imprimir">Imprimir Receita</button>
                </div>
            </div>

            {/* Abaixo seria o conteúdo da receita que será impresso */}
            <div id="receita-impressao" style={{ display: 'none' }}>
                <div className="header-impressao">
                    <img className="logo-receita-impressao" src="/logo.svg" alt="Logo Med Manager" />
                    <h2>Med Manager</h2>
                </div>
                <p><strong>Nome do Médico:</strong> {nomeMedico}</p>
                <p><strong>CRM:</strong> {crmMedico}</p>
                <p><strong>Data da Receita:</strong> {dataReceita}</p>
                <p><strong>Nome do Paciente:</strong> {nomePaciente}</p>
                <h3>Receita Escrita:</h3>
                <p>{receita}</p>
            </div>
        </div>
    );
}

export default Receita;
