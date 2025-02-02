import React, { useState } from "react";
import "./listaPacientes.css";

function ListaPacientes({ onEditarPaciente }) {
    const [pacientes, setPacientes] = useState([
        { id: 1, nome: "João Silva", planoDeSaude: "Plano Ouro" },
        { id: 2, nome: "Maria Oliveira", planoDeSaude: "Plano Prata" },
        // Outros pacientes...
    ]);

    const deletaPaciente = (id) => {
        setPacientes(pacientes.filter((paciente) => paciente.id !== id));
    };

    return (
        <div className="listaPacientes">
            <div className="dropdown">
                <select>
                    <option value="default">Todos os planos</option>
                    <option value="planoOuro">Plano Ouro</option>
                    <option value="planoPrata">Plano Prata</option>
                    <option value="planoBronze">Plano Bronze</option>
                </select>
            </div>

            <div className="pacientes-lista">
                {pacientes.map((paciente) => (
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
                                onClick={() =>
                                    onEditarPaciente(paciente)
                                }
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
