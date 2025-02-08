import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import './agenda.css';

const locales = { "pt-BR": ptBR };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

const especialidades = ["Cardiologia", "Dermatologia", "Pediatria", "Ortopedia"];
const medicos = [
  { id: 1, nome: "Dr. João Silva", especialidade: "Cardiologia" },
  { id: 2, nome: "Dra. Maria Oliveira", especialidade: "Dermatologia" },
  { id: 3, nome: "Dr. Carlos Santos", especialidade: "Pediatria" },
  { id: 4, nome: "Dra. Ana Costa", especialidade: "Ortopedia" },
  { id: 5, nome: "Dr. Pedro Lima", especialidade: "Cardiologia" },
];

function Agenda() {
  const [view, setView] = useState("week");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
  const [allEvents, setAllEvents] = useState([]);
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("");
  const [medicoSelecionado, setMedicoSelecionado] = useState("");

  const handleSelectSlot = ({ start, end }) => {
    const agora = new Date();
    if (start < agora) {
      alert("Não é possível agendar no passado!");
      return;
    }
    setNewEvent({ title: "", start, end });
    setIsModalOpen(true);
  };

  const handleAddEvent = () => {
    if (!newEvent.title.trim()) {
      alert("O nome do paciente não pode estar vazio!");
      return;
    }
    const conflito = allEvents.some(
      (event) =>
        event.medico === medicoSelecionado &&
        ((newEvent.start >= event.start && newEvent.start < event.end) ||
          (newEvent.end > event.start && newEvent.end <= event.end) ||
          (newEvent.start <= event.start && newEvent.end >= event.end))
    );
    if (conflito) {
      alert("Horário já ocupado para este médico!");
      return;
    }
    const eventoComMedico = { ...newEvent, medico: medicoSelecionado, especialidade: especialidadeSelecionada };
    setAllEvents([...allEvents, eventoComMedico]);
    setIsModalOpen(false);
  };

  const handleDoubleClickEvent = (event) => {
    const agora = new Date();
    if (event.start < agora) {
      alert("Não é possível editar eventos passados!");
      return;
    }
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const handleEditEvent = () => {
    setAllEvents(
      allEvents.map((event) =>
        event.start.getTime() === selectedEvent.start.getTime() &&
          event.end.getTime() === selectedEvent.end.getTime()
          ? { ...event, title: selectedEvent.title }
          : event
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDeleteEvent = () => {
    setAllEvents(allEvents.filter((event) => event !== selectedEvent));
    setIsEditModalOpen(false);
  };

  const hoje = new Date();
  const minTime = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 8, 0);
  const maxTime = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 18, 0);

  const medicosFiltrados = especialidadeSelecionada
    ? medicos.filter((medico) => medico.especialidade === especialidadeSelecionada)
    : [];


  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <div className="titulo-agendamento">
        <h1>Calendário de Agendamentos</h1>
      </div>
      <div className="filtros">
        <div className="filtro-especialidade">
          <label>Filtrar por Especialidade:</label>
          <select
            value={especialidadeSelecionada}
            onChange={(e) => {
              setEspecialidadeSelecionada(e.target.value);
              setMedicoSelecionado("");
            }}
          >
            <option value="">Selecione</option>
            {especialidades.map((especialidade) => (
              <option key={especialidade} value={especialidade}>{especialidade}</option>
            ))}
          </select>
        </div>

        {especialidadeSelecionada && (
          <div className="filtro-medico">
            <label>Selecione o Médico:</label>
            <select value={medicoSelecionado} onChange={(e) => setMedicoSelecionado(e.target.value)}>
              <option value="" disabled>
                {medicosFiltrados.length > 0 ? "Selecione" : "Nenhum médico disponível"}
              </option>
              {medicosFiltrados.map((medico) => (
                <option key={medico.id} value={medico.nome}>{medico.nome}</option>
              ))}
            </select>
          </div>
        )}

      </div>

      {medicoSelecionado && (
        <Calendar
          localizer={localizer}
          events={allEvents.filter((event) => event.medico === medicoSelecionado)}
          defaultView={view}
          views={["month", "week", "day"]}
          step={30}
          timeslots={1}
          defaultDate={hoje}
          style={{ height: "90vh", fontSize: "16px" }}
          min={minTime}
          max={maxTime}
          selectable
          onSelectSlot={handleSelectSlot}
          onDoubleClickEvent={handleDoubleClickEvent}
          messages={{ next: "Próximo", previous: "Anterior", today: "Hoje", month: "Mês", week: "Semana", day: "Dia" }}
        />
      )}

<div className="modal-container" style={{ display: isModalOpen || isEditModalOpen ? 'flex' : 'none' }}>
        <div className="modal-content">
          {isModalOpen && (
            <>
              <h2>Novo Agendamento</h2>
              <input
                type="text"
                placeholder="Nome do paciente"
                value={newEvent.title}
                onChange={(e) => {
                  let value = e.target.value.replace(/\s+/g, " ");
                  const regex = /^[A-Za-zÀ-ÿ\s]*$/;
                  if (regex.test(value)) {
                    setNewEvent({ ...newEvent, title: value.trimStart() });
                  }
                }}
                />
                <div className="modal-buttons">
                <button className="add-button" onClick={handleAddEvent}>Adicionar</button>
                <button className="cancel-button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                </div>
              </>
              )}
              {isEditModalOpen && (
              <>
                <h2>Editar Agendamento</h2>
                <input
                type="text"
                placeholder="Título"
                value={selectedEvent?.title || ""}
                onChange={(e) => {
                  const regex = /^[A-Za-z\s]*$/;
                  if (regex.test(e.target.value)) {
                  setSelectedEvent({ ...selectedEvent, title: e.target.value });
                  }
                }}
                />
                <div className="modal-buttons">
                <button className="add-button" onClick={handleEditEvent}>Salvar</button>
                <button className="cancel-button" onClick={handleDeleteEvent}>Excluir</button>
                <button className="cancel-button" onClick={() => setIsEditModalOpen(false)}>Cancelar</button>
                </div>
              </>
              )}
            </div>
            </div>
          </div>
          );
        };

        export default Agenda;
