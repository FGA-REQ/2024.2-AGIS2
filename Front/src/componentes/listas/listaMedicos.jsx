import React, { useState } from "react";
import "./listaMedicos.css";

function ListaMedicos({ onEditarMedico }) {

    const [medicos, setMedicos] = useState([
        { id: 1, nome: "Dr Daniel Pereira", especialidade: "Oncologista" },
        { id: 2, nome: "Dra Ana Silva", especialidade: "Cardiologista" },
        { id: 3, nome: "Dr João Souza", especialidade: "Ortopedista" },
        { id: 4, nome: "Dra Maria Clara", especialidade: "Oftalmologista" },
        { id: 5, nome: "Dra Oleari", especialidade: "Oftalmologista" },
    ]);

    const [filtroEspecialidade, setFiltroEspecialidade] = useState("default");

    const deletaMedico = (id) => {
        setMedicos(medicos.filter((medico) => medico.id !== id));
    };

    const medicosFiltrados = filtroEspecialidade === "default"
        ? medicos
        : medicos.filter((medico) => medico.especialidade.toLowerCase() === filtroEspecialidade);

    return (
        <div className="listaMedicos">

            {/* FORMA DE COLOCAR TODOS OS CADASTADOS AQ AUTOMATICAMENTE*/}
            <div className="dropdown">
                <select onChange={(e) => setFiltroEspecialidade(e.target.value)}>
                    <option value="default">Todas especialidades</option>
                    <option value="oncologista">Oncologista</option>
                    <option value="cardiologista">Cardiologista</option>
                    <option value="ortopedista">Ortopedista</option>
                    <option value="oftalmologista">Oftalmologista</option>
                </select>
            </div>

            <div className="medicos-lista">
                {medicosFiltrados.map((medico) => (
                    <div key={medico.id} className="medico-item">
                        <img src="medico.svg" alt="Ícone de usuário" className="user-icon-medicos" />
                        <div className="medico-info">
                            <span>{medico.nome}</span>
                            <span>Especialidade: {medico.especialidade}</span>
                        </div>
                        <div className="medico-edita-deleta">
                            <img
                                src="lapis.svg"
                                alt="Editar"
                                className="lapis-medico"
                                onClick={() => onEditarMedico(medico)}
                            />
                            <img
                                src="lixo.svg"
                                alt="Deletar"
                                className="lixo-medico"
                                onClick={() => deletaMedico(medico.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaMedicos;