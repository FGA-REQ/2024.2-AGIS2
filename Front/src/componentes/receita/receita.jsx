import React, { useState, useEffect, useContext } from 'react';
import './receita.css';
import * as api from "../../services/api";
import { UsuarioContext } from '../../context/context';

function Receita() {
    const [nomePaciente, setNomePaciente] = useState('');
    const [nomeMedico, setNomeMedico] = useState(''); // Nome padrão inserido automaticamente
    const [crmMedico, setCrmMedico] = useState(''); // CRM padrão inserido automaticamente
    const [dataReceita, setDataReceita] = useState('');
    const [receita, setReceita] = useState('');

    const { CRM, nome } = useContext(UsuarioContext);

    useEffect(() => {
        const hoje = new Date().toISOString().split('T')[0];
        setDataReceita(hoje);

        setNomeMedico(nome);
        setCrmMedico(CRM);
    }, []);

    const imprimirReceita = () => {
        if (!nomePaciente || !nomeMedico || !crmMedico || !dataReceita || !receita) {
            window.alert('Por favor, preencha todos os campos antes de imprimir.');
            return;
        }

        const janelaImpressao = window.open('', '', 'height=500,width=800');
        janelaImpressao.document.write(`
            <html>
            <head>
                <title>Receita Médica</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 40px; }
                    .header-impressao { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; justify-content: center; }
                    .logo-receita-impressao { width: 80px; }
                    .titulo-receita { font-size: 34px; font-weight: bold; }
                    .linha-info { display: flex; justify-content: space-between; margin-bottom: 20px; }
                    .prescricao { margin-top: 40px; font-size: 16px; white-space: pre-line; }
                </style>
            </head>
            <body>
                <div>
                    <div class="header-impressao">
                        <img class="logo-receita-impressao" src="/logo.svg" alt="Logo Med Manager" />
                        <span class="titulo-receita">Med Manager</span>
                    </div>
                    
                    <div class="linha-info">
                        <span><strong>Médico:</strong> ${nomeMedico}</span>
                        <span><strong>CRM:</strong> ${crmMedico}</span>
                    </div>

                    <div class="linha-info">
                        <span><strong>Paciente:</strong> ${nomePaciente}</span>
                        <span><strong>Data:</strong> ${dataReceita}</span>
                    </div>

                    <div class="prescricao">
                        <h3>Prescrição Médica</h3>
                        <p>${receita}</p>
                    </div>
                </div>
            </body>
            </html>
        `);
        janelaImpressao.document.close();
        janelaImpressao.print();
    };

    const handleNomePacienteChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setNomePaciente(value);
        }
    };

    const pegarMedico = async () => {
        try {
            await api.buscarDoutorEspecifico();

        } catch{
            console.error("Erro ao cadastrar ou editar:", error);
        }
    };

    return (
        <div className="receita">
            <div className="header-receita">
                <img className="logo-receita" src="/logo.svg" alt="Logo Med Manager" />
                <h2>Med Manager</h2>
            </div>

            <div className="form-receita">
                <div className="campo-duplo">
                    <div className="campo">
                        <label>Nome do Médico:</label>
                        <input
                            type="text"
                            value={nomeMedico}
                            readOnly
                        />
                    </div>
                    <div className="campo">
                        <label>CRM do Médico:</label>
                        <input
                            type="text"
                            value={crmMedico}
                            readOnly
                        />
                    </div>
                </div>

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
                            onChange={(e) => setDataReceita(e.target.value)}
                        />
                    </div>
                </div>

                <div className="escreve-receita">
                    <h3>Escreva a Receita</h3>
                    <textarea
                        value={receita}
                        onChange={(e) => setReceita(e.target.value)}
                        placeholder="Escreva aqui a receita médica"
                        rows="30"
                        cols="60"
                    ></textarea>
                </div>

                <div className="campo" style={{ textAlign: 'center' }}> {/* Botão centralizado */}
                    <button onClick={imprimirReceita} className="botao-imprimir">Imprimir Receita</button>
                </div>
            </div>
        </div>
    );
}

export default Receita;