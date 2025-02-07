import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Modal from "react-modal";

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

const Agenda = () => {
  const [view, setView] = useState("week");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
  const [allEvents, setAllEvents] = useState([]);
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("");
  const [medicoSelecionado, setMedicoSelecionado] = useState("");

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ title: "", start, end });
    setIsModalOpen(true);
  };

  const handleAddEvent = () => {
    const eventoComMedico = { ...newEvent, medico: medicoSelecionado, especialidade: especialidadeSelecionada };
    setAllEvents([...allEvents, eventoComMedico]);
    setIsModalOpen(false);
  };

  const handleDoubleClickEvent = (event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const handleEditEvent = () => {
    setAllEvents(
      allEvents.map((event) => (event === selectedEvent ? { ...selectedEvent, title: newEvent.title } : event))
    );
    setIsEditModalOpen(false);
  };

  const handleDeleteEvent = () => {
    setAllEvents(allEvents.filter((event) => event !== selectedEvent));
    setIsEditModalOpen(false);
  };

  const medicosFiltrados = especialidadeSelecionada
    ? medicos.filter((medico) => medico.especialidade === especialidadeSelecionada)
    : [];

  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <h1>Calendário de Agendamentos</h1>
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
              <option value="">Selecione</option>
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
          defaultDate={new Date()}
          style={{ height: "90vh", fontSize: "16px" }}
          min={new Date(2025, 1, 3, 8, 0)}
          max={new Date(2025, 1, 3, 18, 0)}
          selectable
          onSelectSlot={handleSelectSlot}
          onDoubleClickEvent={handleDoubleClickEvent}
          messages={{ next: "Próximo", previous: "Anterior", today: "Hoje", month: "Mês", week: "Semana", day: "Dia" }}
        />
      )}

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2>Novo Agendamento</h2>
        <input type="text" placeholder="Título" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <button onClick={handleAddEvent}>Adicionar</button>
        <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
      </Modal>

      <Modal isOpen={isEditModalOpen} onRequestClose={() => setIsEditModalOpen(false)}>
        <h2>Editar Agendamento</h2>
        <input type="text" placeholder="Título" value={selectedEvent?.title || ""} onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })} />
        <button onClick={handleEditEvent}>Salvar</button>
        <button onClick={handleDeleteEvent}>Excluir</button>
        <button onClick={() => setIsEditModalOpen(false)}>Cancelar</button>
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");
export default Agenda;
