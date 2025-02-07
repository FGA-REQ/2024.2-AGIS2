import React, { useState } from "react";
import "./listaPacientes.css";

function ListaPacientes({ onEditarPaciente }) {
    const [pacientes, setPacientes] = useState([
        { id: 1, nome: "João Silva", planoDeSaude: "Plano Ouro" },
        { id: 2, nome: "Maria Oliveira", planoDeSaude: "Plano Prata" },
        { id: 3, nome: "Carlos Souza", planoDeSaude: "Plano Bronze" },
        { id: 4, nome: "Ana Costa", planoDeSaude: "Plano Ouro" },
    ]);

    const [filtroPlano, setFiltroPlano] = useState("default");

    const deletaPaciente = (id) => {
        setPacientes(pacientes.filter((paciente) => paciente.id !== id));
    };

    const pacientesFiltrados = filtroPlano === "default"
        ? pacientes
        : pacientes.filter((paciente) => paciente.planoDeSaude.toLowerCase() === filtroPlano);

    return (
        <div className="listaPacientes">
            <div className="dropdown">

                {/* FORMA DE COLOCAR TODOS OS CADASTADOS AQ AUTOMATICAMENTE*/}
                <select onChange={(e) => setFiltroPlano(e.target.value)}>
                    <option value="default">Todos os planos</option>
                    <option value="plano ouro">Plano Ouro</option>
                    <option value="plano prata">Plano Prata</option>
                    <option value="plano bronze">Plano Bronze</option>
                </select>
            </div>

            <div className="pacientes-lista">
                {pacientesFiltrados.map((paciente) => (
                    <div key={paciente.id} className="paciente-item">
                        <img src="paciente.svg" alt="Ícone de usuário" className="user-icon-pacientes" />
                        <div className="paciente-info">
                            <span>{paciente.nome}</span>
                            <span>Plano de Saúde: {paciente.planoDeSaude}</span>
                        </div>
                        <div className="paciente-edita-deleta">
                            <img
                                src="lapis.svg"
                                alt="Editar"
                                className="lapis-paciente"
                                onClick={() => onEditarPaciente(paciente)}
                            />
                            <img
                                src="lixo.svg"
                                alt="Deletar"
                                className="lixo-paciente"
                                onClick={() => deletaPaciente(paciente.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaPacientes;
