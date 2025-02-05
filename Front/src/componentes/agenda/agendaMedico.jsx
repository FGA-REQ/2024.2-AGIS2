import React, { useState } from 'react';
import './agendaMedico.css';

const Agenda = () => {
  const [consultas, setConsultas] = useState([
    { id: 1, paciente: 'João Silva', data: '2025-02-06', horario: '10:00' },
    { id: 2, paciente: 'Maria Souza', data: '2025-02-06', horario: '11:00' },
    { id: 3, paciente: 'Carlos Oliveira', data: '2025-02-07', horario: '14:00' },
    { id: 4, paciente: 'Ana Costa', data: '2025-02-06', horario: '09:00' },
    { id: 5, paciente: 'Luana Almeida', data: '2025-02-05', horario: '15:00' },
    { id: 5, paciente: 'Luana', data: '2025-03-05', horario: '15:00' },
    { id: 5, paciente: 'Luana', data: '2025-07-05', horario: '15:00' },
    { id: 5, paciente: 'Luana', data: '2025-07-05', horario: '15:00' },
  ]);

  const [alertaConfirmacao, setAlertaConfirmacao] = useState(false);

  // Função para ordenar as consultas por data e horário
  const sortedConsultas = consultas.sort((a, b) => {
    const dataA = new Date(`${a.data}T${a.horario}:00`);
    const dataB = new Date(`${b.data}T${b.horario}:00`);
    return dataA - dataB;
  });

  // Função para formatar data para o formato 'dd/mm - dia da semana'
  const formatarData = (data) => {
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const date = new Date(data);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const diaDaSemana = diasDaSemana[date.getDay()];
    return `${dia}/${mes} - ${diaDaSemana}`;
  };

  const handleConsultaRealizada = (id) => {
    if (window.confirm("Tem certeza que a consulta foi realizada?")) {
      setConsultas(consultas.filter(consulta => consulta.id !== id));
      setAlertaConfirmacao(true);
      setTimeout(() => setAlertaConfirmacao(false), 3000); // Alerta desaparece após 3 segundos
    }
  };

  const hoje = new Date().toISOString().split('T')[0]; // Pega a data atual no formato yyyy-mm-dd

  return (
    <div className="agenda-container">
      <h2>Agenda do Médico</h2>
      {alertaConfirmacao && <div className="alerta">Consulta realizada com sucesso!</div>}
      <div className="agenda">
        {/* Agrupando as consultas por data */}
        {['Hoje', hoje, ...Array.from(new Set(sortedConsultas.map(consulta => consulta.data)))]
          .map((data, index) => {
            const consultasPorData = sortedConsultas.filter(consulta => consulta.data === data || (data === 'Hoje' && consulta.data === hoje));
            return (
              <div key={index}>
                <h3>{data === 'Hoje' ? 'Hoje' : formatarData(data)}</h3>
                {consultasPorData.map(consulta => (
                  <div key={consulta.id} className="consulta">
                    <div className="consulta-info">
                      <p><strong>Paciente:</strong> {consulta.paciente}</p>
                      <p><strong>Data:</strong> {formatarData(consulta.data)}</p>
                      <p><strong>Horário:</strong> {consulta.horario}</p>
                    </div>
                    <button onClick={() => handleConsultaRealizada(consulta.id)} className="btn-realizada">
                      Marcar como realizada
                    </button>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Agenda;
