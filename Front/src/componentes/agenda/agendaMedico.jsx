import React, { useState } from 'react';
import './agendaMedico.css';

const Agenda = () => {
  const [consultas, setConsultas] = useState([
    { id: 1, paciente: 'João Silva', data: '06/02/2025', horario: '10:00' },
    { id: 2, paciente: 'Maria Souza', data: '06/02/2025', horario: '11:00' },
    { id: 3, paciente: 'Carlos Oliveira', data: '07/02/2025', horario: '14:00' },
    { id: 4, paciente: 'Ana Costa', data: '06/02/2025', horario: '09:00' },
    { id: 5, paciente: 'Luana Almeida', data: '05/02/2025', horario: '15:00' },
    { id: 6, paciente: 'Fernando Lima', data: '06/02/2025', horario: '08:30' },
    { id: 7, paciente: 'Roberta Dias', data: '07/02/2025', horario: '10:00' },
    { id: 8, paciente: 'Eduardo Mello', data: '07/02/2025', horario: '09:30' },
    { id: 9, paciente: 'Bruna Marques', data: '08/02/2025', horario: '16:00' },
    { id: 11, paciente: 'Mariana', data: '24/10/2025', horario: '14:30' },
    { id: 10, paciente: 'Mariana Rocha', data: '06/02/2025', horario: '14:30' },
  ]);

  const [filtroData, setFiltroData] = useState('');

  // Função para converter a data do formato dd/mm/aaaa para aaaa-mm-dd
  const converterDataParaISO = (data) => {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
  };

  // Função para converter do formato aaaa-mm-dd para dd/mm/aaaa
  const converterISOParaData = (iso) => {
    const [ano, mes, dia] = iso.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  // Função para formatar a data para 'dd/mm - dia da semana'
  const formatarData = (data) => {
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const [dia, mes, ano] = data.split('/');
    const dataObj = new Date(`${ano}-${mes}-${dia}T00:00:00-03:00`);
    const diaDaSemana = diasDaSemana[dataObj.getUTCDay()];
    return `${dia}/${mes} - ${diaDaSemana}`;
  };

  const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  // Ordenar as consultas por data e horário
  const sortedConsultas = [...consultas].sort((a, b) => {
    const dataA = new Date(`${converterDataParaISO(a.data)}T${a.horario}:00-03:00`);
    const dataB = new Date(`${converterDataParaISO(b.data)}T${b.horario}:00-03:00`);
    return dataA - dataB;
  });

  // Filtrar consultas pela data selecionada no filtro
  const consultasFiltradas = filtroData
    ? sortedConsultas.filter((consulta) => consulta.data === converterISOParaData(filtroData))
    : sortedConsultas;

  const handleConsultaRealizada = (id) => {
    if (window.confirm("Tem certeza que a consulta foi realizada?")) {
      setConsultas(consultas.filter(consulta => consulta.id !== id));
    }
  };

  return (
    <div className="agenda-container">

      <div className="filtro-container">
        <label htmlFor="filtroData">Filtrar por Data:</label>
        <input
          type="date"
          id="filtroData"
          value={filtroData}
          onChange={(e) => setFiltroData(e.target.value)}
        />
      </div>

      <div className="agenda">
        {Array.from(new Set(consultasFiltradas.map(consulta => consulta.data)))
          .map((data, index) => {
            const consultasPorData = consultasFiltradas.filter(consulta => consulta.data === data);
            return (
              <div className='agenda-medico' key={index}>
                <h3>{data === hoje ? `Hoje - ${formatarData(data)}` : formatarData(data)}</h3>
                {consultasPorData.map(consulta => (
                  <div key={consulta.id} className="consulta">
                    <div className="consulta-medico-info">
                      <p><strong>Paciente:</strong> {consulta.paciente}</p>
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
