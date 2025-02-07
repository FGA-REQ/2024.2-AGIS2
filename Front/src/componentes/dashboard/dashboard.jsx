import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import './dashboard.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

function Dashboard() {
    const pacientesDash = [
        { id: 1, nome: 'Carlos', plano: 'Privado' },
        { id: 2, nome: 'Ana', plano: 'Particular' },
        { id: 3, nome: 'Mariana', plano: 'Sus' },
        { id: 4, nome: 'Lucas', plano: 'Privado' },
        { id: 5, nome: 'João', plano: 'Sus' },
        { id: 6, nome: 'Fernanda', plano: 'Privado' },
        { id: 7, nome: 'Pedro', plano: 'Particular' },
        { id: 8, nome: 'Raquel', plano: 'Sus' },
        { id: 9, nome: 'Beatriz', plano: 'ndhn' },
        { id: 21, nome: 'Thiago', plano: 'Particular 1' },
        { id: 22, nome: 'Patricia', plano: 'Particular 2' },
        { id: 23, nome: 'Bruno', plano: 'Particular 3' },
        { id: 24, nome: 'Renata', plano: 'Particular 4' },
        { id: 25, nome: 'Gustavo', plano: 'Particular 5' },
        { id: 10, nome: 'Ricardo', plano: 'wqdbj' },

    ];

    const medicosDash = [
        { id: 1, nome: 'Dr. Carlos', especialidade: 'Cardiologia' },
        { id: 2, nome: 'Dr. Ana', especialidade: 'Dermatologia' },
        { id: 3, nome: 'Dr. Lucas', especialidade: 'Pediatria' },
        { id: 4, nome: 'Dr. João', especialidade: 'Cardiologia' },
        { id: 5, nome: 'Dr. Mariana', especialidade: 'Ortopedia' },
        { id: 6, nome: 'Dr. Fernanda', especialidade: 'Cardiologia' },
        { id: 7, nome: 'Dr. Pedro', especialidade: 'Ginecologia' },
        { id: 8, nome: 'Dr. Raquel', especialidade: 'Ortopedia' },
        { id: 9, nome: 'Dr. Carlos', especialidade: 'Oftal' },
        { id: 10, nome: 'Dr. Ana', especialidade: 'Oftal2' },
        { id: 11, nome: 'Dr. Lucas', especialidade: 'Oftal3' },
        { id: 12, nome: 'Dr. João', especialidade: 'Oftal4' },
        { id: 13, nome: 'Dr. Mariana', especialidade: 'Oftal5' },
        { id: 14, nome: 'Dr. Fernanda', especialidade: 'Oftal6' },
        { id: 15, nome: 'Dr. Pedro', especialidade: 'Oftal7' },
        { id: 16, nome: 'Dr. Raquel', especialidade: 'Oftal8' },
        { id: 17, nome: 'Dr. Carlos', especialidade: 'Oftal9' },
        { id: 18, nome: 'Dr. Ana', especialidade: 'Oftal10' },
        { id: 19, nome: 'Dr. Lucas', especialidade: 'Oftal11' },
        { id: 20, nome: 'Dr. João', especialidade: 'Especialidade 1' },
        { id: 21, nome: 'Dr. Mariana', especialidade: 'Especialidade 2' },
        { id: 22, nome: 'Dr. Fernanda', especialidade: 'Especialidade 3' },
        { id: 23, nome: 'Dr. Pedro', especialidade: 'Especialidade 4' },
        { id: 24, nome: 'Dr. Raquel', especialidade: 'Especialidade 5' },
        { id: 25, nome: 'Dr. Carlos', especialidade: 'Especialidade 6' },
        { id: 26, nome: 'Dr. Ana', especialidade: 'Especialidade 7' },
        { id: 27, nome: 'Dr. Lucas', especialidade: 'Especialidade 8' },
        { id: 28, nome: 'Dr. João', especialidade: 'Especialidade 1' },
        { id: 29, nome: 'Dr. Mariana', especialidade: 'Especialidade 2' },
        { id: 30, nome: 'Dr. Fernanda', especialidade: 'Especialidade 3' },
        { id: 31, nome: 'Dr. Pedro', especialidade: 'Especialidade 4' },
        { id: 32, nome: 'Dr. Raquel', especialidade: 'Especialidade 5' },
        { id: 33, nome: 'Dr. Carlos', especialidade: 'Especialidade 6' },
        { id: 34, nome: 'Dr. Ana', especialidade: 'Especialidade 7' },
        { id: 35, nome: 'Dr. Lucas', especialidade: 'Especialidade 8' },
        { id: 36, nome: 'Dr. João', especialidade: 'Especialidade 1' },
        { id: 37, nome: 'Dr. Mariana', especialidade: 'Especialidade 2' },
        { id: 38, nome: 'Dr. Fernanda', especialidade: 'Especialidade 3' },
        { id: 39, nome: 'Dr. Pedro', especialidade: 'Especialidade 4' },
        { id: 40, nome: 'Dr. Raquel', especialidade: 'Especialidade 5' },
        { id: 41, nome: 'Dr. Carlos', especialidade: 'Especialidade 6' },
        { id: 42, nome: 'Dr. Ana', especialidade: 'Especialidade 7' },
        { id: 43, nome: 'Dr. Lucas', especialidade: 'Especialidade 8' },
        { id: 44, nome: 'Dr. João', especialidade: 'Especialidade 1' },
        { id: 45, nome: 'Dr. Mariana', especialidade: 'Especialidade 2' },

    ];

    const calcularPlanosPorPaciente = () => {
        const planos = {};
        pacientesDash.forEach(paciente => {
            planos[paciente.plano] = (planos[paciente.plano] || 0) + 1;
        });
        return planos;
    };


    const calcularMedicosPorEspecialidade = () => {
        const especialidades = {};
        medicosDash.forEach(medico => {
            especialidades[medico.especialidade] = (especialidades[medico.especialidade] || 0) + 1;
        });
        return especialidades;
    };

    const planos = calcularPlanosPorPaciente();
    const medicosPorEspecialidadeData = calcularMedicosPorEspecialidade();
    const totalPlanos = pacientesDash.length;
    const totalMedicos = medicosDash.length;

    const cores = [
        '#0D47A1', '#E91E63', '#9C27B0', '#40E0D0', '#8B0000',
        '#FF8C00', '#FFD700', '#FF5722', '#20B2AA', '#800020',
        '#42A5F5', '#81C784', '#FF8A65', '#90A4AE', '#607D8B',
        '#4CAF50', '#BA68C8', '#008080', '#1976D2', '#DC143C',
        '#F06292', '#FFFF00', '#FFA500'
    ];

    const planosPorPaciente = {
        labels: Object.keys(planos),
        datasets: [
            {
                data: Object.values(planos),
                backgroundColor: cores,
                hoverOffset: 4,
                borderWidth: 1,
            },
        ],
    };

    const medicosPorEspecialidade = {
        labels: Object.keys(medicosPorEspecialidadeData),
        datasets: [
            {
                data: Object.values(medicosPorEspecialidadeData),
                backgroundColor: cores,
                hoverOffset: 4,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const total = tooltipItem.dataset.data.reduce((acc, value) => acc + value, 0);
                        const percentage = ((tooltipItem.raw / total) * 100).toFixed(2);
                        return `${tooltipItem.label}: ${tooltipItem.raw} (${percentage}%)`;
                    },
                },
            },
        },
    };

    return (
        <div className="dashboard">
            <div className="grafico-container">
                <div className="grafico-item">
                    <h3>Planos por Paciente</h3>
                    <Pie data={planosPorPaciente} options={options} />
                    <p>Total: {totalPlanos}</p>
                </div>

                <div className="grafico-item">
                    <h3>Médicos por Especialidade</h3>
                    <Pie data={medicosPorEspecialidade} options={options} />
                    <p>Total: {totalMedicos}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
