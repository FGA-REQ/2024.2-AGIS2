import axios from "axios";

const BASE_URL = "http://localhost:3000";

const createConfig = () => {
	return {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	};
};

// LOGIN
export const login = async (data) => {
	return axios.post(`${BASE_URL}/login`, data);
};


// PATIENTS
export const cadastroPaciente = async (data) => {
	return axios.post(`${BASE_URL}/patients`, data, createConfig());
};

export const excluirPaciente = async (CPF) => {
	return axios.delete(`${BASE_URL}/patients/${CPF}`, CPF, createConfig());
};

export const editarPaciente = async (CPF) => {
	return axios.patch(`${BASE_URL}/patients/${CPF}`, CPF, createConfig());
};

export const buscarPaciente = async () => {
    return axios.get(`${BASE_URL}/patients`, createConfig());
};

export const buscarPacienteEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/patients/${id}`, id);
}


// DOCTORS
export const cadastroDoutor = async (data) => {
	return axios.post(`${BASE_URL}/doctors/`, data, createConfig());
};

export const excluirDoutor = async (CRM) => {
	return axios.delete(`${BASE_URL}/doctors/${CRM}`, CRM, createConfig());
};

export const editarDoutor = async (CRM) => {
	return axios.patch(`${BASE_URL}/doctors/${CRM}`, CRM, createConfig());
};

export const buscarDoutor = async () => {
	return axios.get(`${BASE_URL}/doctors`);
};

export const buscarDoutorEspecifico = async (CRM) => {
	return axios.get(`${BASE_URL}/doctors/${CRM}`, CRM);
}


// ADMIN
export const cadastroAdmin = async (data) => {
	return axios.post(`${BASE_URL}/admin/`, data, createConfig());
};

export const excluirAdmin = async (CPF) => {
	return axios.delete(`${BASE_URL}/admin/${CPF}`, CPF, createConfig());
};

export const editarAdmin = async (id) => {
	return axios.patch(`${BASE_URL}/admin/${id}`, id, createConfig());
};

export const buscarAdmin = async (data) => {
	return axios.get(`${BASE_URL}/admin/`, data);
};

export const buscarAdminEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/admin/${id}`, id);
}


export const enviaToken = async (data) => {
	return axios.post(`${BASE_URL}/password-reset/send-token`, data);
};

export const redefinirSenha = async (data) => {
	return axios.post(`${BASE_URL}/password-reset/reset-password`, data);
};

export const salvarProntuario = async (data) => {
	console.log(createConfig(), data);
    return axios.post(`http://localhost:3003/medicalrecord`, data, createConfig());
};

export const buscarProntuarios = async (patientCPF) => {
    return axios.get(`${BASE_URL}/medicalrecord/${patientCPF}`, createConfig());
};

export const buscarTodosProntuarios = async () => {
    return axios.get(`${BASE_URL}/medicalrecord`, createConfig());
};

// PLANO DE SAUDE
export const cadastroPlano = async (data) => {
	return axios.post(`${BASE_URL}/healthcareplan/`, data, createConfig());
};

export const excluirPlano = async (id) => {
	return axios.delete(`${BASE_URL}/healthcareplan/${id}`, id, createConfig());
};

export const editarPlano = async (id) => {
	return axios.patch(`${BASE_URL}/healthcareplan/${id}`, id, createConfig());
};

export const buscarPlano = async (data) => {
	return axios.get(`${BASE_URL}/healthcareplan/`, data);
};

export const buscarPlanoEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/healthcareplan/${id}`, id);
};


// REMEDIO
export const cadastroRemedio = async (data) => {
	return axios.post(`${BASE_URL}/drugs/`, data, createConfig());
};

export const excluirRemedio = async (id) => {
	return axios.delete(`${BASE_URL}/drugs/${id}`, id, createConfig());
};

export const editarRemedio = async (id, dados) => {
	return axios.patch(`${BASE_URL}/drugs/${id}`, id, dados, createConfig());
};

export const buscarRemedio = async () => {
	return axios.get(`${BASE_URL}/drugs/`);
};

export const buscarRemedioEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/drugs/${id}`, id);
};


/// DRUG SCHEDULE
export const cadastroDrugSchedule = async (data) => {
	return axios.post(`${BASE_URL}/drugschedule/`, data, createConfig());
};

export const excluirDrugSchedule = async (id) => {
	return axios.delete(`${BASE_URL}/drugschedule/${id}`, id, createConfig());
};

export const editarDrugSchedule = async (id) => {
	return axios.patch(`${BASE_URL}/drugschedule/${id}`, id, createConfig());
};

export const buscarDrugSchedule = async (data) => {
	return axios.get(`${BASE_URL}/drugschedule/`, data);
};

export const buscarDrugScheduleEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/drugschedule/${id}`, id);
};

/// RECEITA
export const cadastroReceita = async (data) => {
	return axios.post(`${BASE_URL}/prescription/`, data, createConfig());
};

export const excluirReceita = async (id) => {
	return axios.delete(`${BASE_URL}/prescription/${id}`, id, createConfig());
};

export const editarReceita = async (id) => {
	return axios.patch(`${BASE_URL}/prescription/${id}`, id, createConfig());
};

export const buscarReceita = async (data) => {
	return axios.get(`${BASE_URL}/prescription/`, data);
};

export const buscarReceitaEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/prescription/${id}`, id);
};
