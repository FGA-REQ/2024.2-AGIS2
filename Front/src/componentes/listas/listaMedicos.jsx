import React, { useState, useEffect } from "react";
import "./listaMedicos.css";
import * as api from "../../services/api";
import { debounce } from "lodash";

function ListaMedicos() {
    const [medicos, setMedicos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [filtroEspecialidade, setFiltroEspecialidade] = useState("default");
    const [alert, setAlert] = useState(null);

    // 🚀 Buscar médicos na API ao carregar a página
    useEffect(() => {
        const fetchMedicos = async () => {
            try {
                const response = await api.buscarDoutor();
                setMedicos(response.data); // Acesse a propriedade data da resposta
            } catch (error) {
                console.error("Erro ao buscar médicos:", error);
                setAlert({ type: "error", message: "Erro ao buscar médicos" });
            }
        };
        fetchMedicos();
    }, []);

    // 🔍 Filtrar médicos por nome/especialidade
    const handleSearch = debounce((searchTerm) => {
        setPesquisa(searchTerm);
    }, 300);

    const medicosFiltrados = medicos.filter((medico) => {
        const matchesSearch =
            medico.name.toLowerCase().includes(pesquisa.toLowerCase()) ||
            medico.specialty.toLowerCase().includes(pesquisa.toLowerCase());

        const matchesSpecialty =
            filtroEspecialidade === "default" ||
            medico.specialty.toLowerCase() === filtroEspecialidade;

        return matchesSearch && matchesSpecialty;
    });

    return (
        <div className="listaMedicos">
            {/* 🔽 Filtro por especialidade */}
            <div className="dropdown">
                <select
                    className="filtro-select"
                    onChange={(e) => setFiltroEspecialidade(e.target.value)}
                >
                    <option value="default">Todas especialidades</option>
                    <option value="oncologista">Oncologista</option>
                    <option value="cardiologista">Cardiologista</option>
                    <option value="ortopedista">Ortopedista</option>
                    <option value="oftalmologista">Oftalmologista</option>
                </select>
            </div>

            {/* 🔍 Barra de pesquisa */}
            <div className="barra-de-pesquisa">
                <input
                    type="text"
                    placeholder="Pesquise por nome ou especialidade..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            {/* 📜 Lista de Médicos */}
            <div className="lista-funcionarios">
                {medicosFiltrados.length > 0 ? (
                    medicosFiltrados.map((medico) => (
                        <div key={medico._id} className="medico-card">
                            <div className="medico-info">
                                <UserPlus size={24} />
                                <div>
                                    <p className="medico-nome">{medico.name}</p>
                                    <p className="medico-especialidade">
                                        Especialidade: {medico.specialty}
                                    </p>
                                </div>
                            </div>
                            <div className="medico-acoes">
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="nenhum-medico">Nenhum médico encontrado.</p>
                )}
            </div>

            {/* 🚨 Alerta de erro */}
            {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        </div>
    );
}

export default ListaMedicos;