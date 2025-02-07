import React, { useState } from "react";
import "./consultas.css";

function Consulta() {
    const [consultas, setConsultas] = useState([
        { id: 1, medico: "Dr. Daniel Pereira", especialidade: "Oncologista", horario: "10:30", data: "12/02/2024" },
        { id: 2, medico: "Dra. Ana Silva", especialidade: "Cardiologista", horario: "14:00", data: "15/02/2024" },
        { id: 3, medico: "Dr. João Souza", especialidade: "Ortopedista", horario: "09:00", data: "20/02/2024" }
    ]);

    return (
        <div className="consulta-container">
            <h2>Consultas Agendadas</h2>
            {consultas.length === 0 ? (
                <p>Nenhuma consulta agendada.</p>
            ) : (
                <div className="consulta-lista">
                    {consultas.map((consulta) => (
                        <div key={consulta.id} className="consulta-item">
                            <div className="consulta-info">
                                <p><strong>Médico:</strong> {consulta.medico}</p>
                                <p><strong>Especialidade:</strong> {consulta.especialidade}</p>
                                <p><strong>Horário:</strong> {consulta.horario}</p>
                                <p><strong>Data:</strong> {consulta.data}</p>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Consulta;
