import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/home';
import Login from './paginas/login/login';
import Admin from './paginas/admin/admin';
import Medico from './paginas/medico/medico';
import Paciente from './paginas/paciente/paciente';
import AlterarSenha from './paginas/alterarSenha/alterarSenha';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />                <Route path="/medico" element={<Medico />} />
        <Route path="/paciente" element={<Paciente />} />                <Route path="/medico" element={<Medico />} />
        <Route path="/medico" element={<Medico />} />                <Route path="/medico" element={<Medico />} />
        <Route path="/alterarSenha" element={<AlterarSenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
