import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./agenda.css";

const localizer = momentLocalizer(moment);

function Agenda () {
  const [especialidades] = useState([
    "Cardiologia",
    "Dermatologia",
    "Pediatria",
    "Ortopedia",
  ]);

  const [medicos] = useState([
    { id: 1, nome: "Dr. João Silva", especialidade: "Cardiologia" },
    { id: 2, nome: "Dra. Maria Oliveira", especialidade: "Dermatologia" },
    { id: 3, nome: "Dr. Carlos Santos", especialidade: "Pediatria" },
    { id: 4, nome: "Dra. Ana Costa", especialidade: "Ortopedia" },
    { id: 5, nome: "Dr. Pedro Lima", especialidade: "Cardiologia" },
  ]);

  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("");
  const [medicoSelecionado, setMedicoSelecionado] = useState("");
  const [eventos, setEventos] = useState({});

  const horariosDisponiveis = generateHorarios();

  // Gerar horários disponíveis entre 8h e 18h com intervalos de 30 minutos
  function generateHorarios() {
    const horarios = [];
    const inicio = moment().set({ hour: 8, minute: 0, second: 0, millisecond: 0 });
    const fim = moment().set({ hour: 18, minute: 0, second: 0, millisecond: 0 });

    while (inicio.isBefore(fim)) {
      horarios.push({
        start: inicio.toDate(),
        end: inicio.clone().add(30, "minutes").toDate(),
      });
      inicio.add(30, "minutes");
    }

    return horarios;
  }

  const handleSelectSlot = (slotInfo) => {
    const titulo = prompt(
      `Digite o nome do paciente ou descrição do agendamento para o ${medicoSelecionado.nome}:`
    );
    if (titulo) {
      const novoEvento = {
        title: titulo,
        start: slotInfo.start,
        end: slotInfo.end,
      };
      setEventos({
        ...eventos,
        [medicoSelecionado.id]: [...(eventos[medicoSelecionado.id] || []), novoEvento],
      });
    }
  };

  const handleSelectEvent = (event) => {
    alert(`Agendamento para ${event.title}`);
  };

  const medicosFiltrados = especialidadeSelecionada
    ? medicos.filter((medico) => medico.especialidade === especialidadeSelecionada)
    : [];

    // Seleciona todos os elementos com a classe 'rbc-day-bg'
const dayBgElements = document.querySelectorAll('.rbc-day-bg.rbc-row');

// Remove cada um dos elementos
dayBgElements.forEach(element => {
  element.remove();
});

  return (
    <div className="medico-calendario">
      <h1>Calendário de Agendamentos</h1>
      <div className="filtros">
        <div className="filtro-especialidade">
          <label>Filtrar por Especialidade:</label>
          <select
            value={especialidadeSelecionada}
            onChange={(e) => {
              setEspecialidadeSelecionada(e.target.value);
              setMedicoSelecionado(null);
            }}
          >
            <option value="">Selecione</option>
            {especialidades.map((especialidade) => (
              <option key={especialidade} value={especialidade}>
                {especialidade}
              </option>
            ))}
          </select>
        </div>

        {especialidadeSelecionada && (
          <div className="filtro-medico">
            <label>Selecione o Médico:</label>
            <select
              value={medicoSelecionado ? medicoSelecionado.id : ""}
              onChange={(e) =>
                setMedicoSelecionado(
                  medicosFiltrados.find((medico) => medico.id === parseInt(e.target.value))
                )
              }
            >
              <option value="">Selecione</option>
              {medicosFiltrados.map((medico) => (
                <option key={medico.id} value={medico.id}>
                  {medico.nome}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {medicoSelecionado ? (
        <Calendar
          localizer={localizer}
          events={eventos[medicoSelecionado.id] || []}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          step={30}
          timeslots={1}
          min={new Date(2024, 0, 1, 8, 0)}
          max={new Date(2024, 0, 1, 18, 0)}
          defaultView="week"
          views={["day", "week", "agenda"]}
          defaultDate={new Date()}
          className="custom-calendar"
        />
      ) : (
        <p className="mensagem-selecao">Selecione uma especialidade e um médico para visualizar o calendário.</p>
      )}
    </div>
  );
};

export default Agenda;
