import React, { useState } from "react";
import "./listaMedicos.css";

function ListaMedicos({ onEditarMedico }) {
    const [medicos, setMedicos] = useState([
        { id: 1, nome: "Dr Daniel Pereira", especialidade: "Oncologista" },
        { id: 2, nome: "Dra Ana Silva", especialidade: "Cardiologista" },
        // Outros médicos...
    ]);

    const deletaMedico = (id) => {
        setMedicos(medicos.filter((medico) => medico.id !== id));
    };

    return (
        <div className="listaMedicos">
            <div className="dropdown">
                <select>
                    <option value="default">Todas especialidades</option>
                    <option value="oncologista">Oncologista</option>
                    <option value="cardiologista">Cardiologista</option>
                    <option value="pediatra">Pediatra</option>
                </select>
            </div>

            <div className="medicos-lista">
                {medicos.map((medico) => (
                    <div key={medico.id} className="medico-item">
                        <img src="user.svg" alt="Ícone de usuário" className="user-icon-medicos" />
                        <div className="medico-info">
                            <span>{medico.nome}</span>
                            <span>Especialidade: {medico.especialidade}</span>
                        </div>
                        <div className="medico-edita-deleta">
                            <img
                                src="lapis.svg"
                                alt="Editar"
                                className="lapis-medico"
                                onClick={() =>
                                    onEditarMedico(medico)
                                }
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

