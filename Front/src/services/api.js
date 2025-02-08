import axios from "axios";

const BASE_URL = "http://localhost:3001";

// const createConfig = () => {
// 	return {
// 		headers: {
// 			Authorization: `Bearer ${localStorage.getItem("token")}`,
// 		},
// 	};
// };

// get login
export const loginAdmin = async (data) => {
	return axios.get(`${BASE_URL}/admin/login`, data);
};

// PATIENTS
export const cadastroPaciente = async (data) => {
	return axios.post(`${BASE_URL}/patients/`, data, createConfig());
};

export const excluirPaciente = async (CPF) => {
	return axios.delete(`${BASE_URL}/patients/${CPF}`, CPF, createConfig());
};

export const updatePaciente = async (CPF) => {
	return axios.patch(`${BASE_URL}/patients/${CPF}`, CPF, createConfig());
};

export const buscarPaciente = async (data) => {
	return axios.get(`${BASE_URL}/patients/`, data);
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

export const updateDoutor = async (CRM) => {
	return axios.patch(`${BASE_URL}/doctors/${CRM}`, CRM, createConfig());
};

export const buscarDoutor = async () => {
	return axios.get(`${BASE_URL}/doctors`);
};

export const buscarDoutorEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/doctors/${id}`, id);
}


// ADMIN
export const cadastroAdmin = async (data) => {
	return axios.post(`${BASE_URL}/admin/`, data, createConfig());
};

export const excluirAdmin = async (CPF) => {
	return axios.delete(`${BASE_URL}/admin/${CPF}`, CPF, createConfig());
};

export const updateAdmin = async (id) => {
	return axios.patch(`${BASE_URL}/admin/${id}`, id, createConfig());
};

export const buscarAdmin = async (data) => {
	return axios.get(`${BASE_URL}/admin/`, data);
};

export const buscarAdminEspecifico = async (id) => {
	return axios.get(`${BASE_URL}/admin/${id}`, id);
}