import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './rotas.jsx';
import Admin from './paginas/admin/admin.jsx';
import './app.css';
import Cadastro from './componentes/cadastro/cadastro.jsx';
import Agendamento from './componentes/agenda/agenda.jsx';
import Paciente from './paginas/paciente/paciente.jsx';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
