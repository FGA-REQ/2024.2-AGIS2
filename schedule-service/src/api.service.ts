import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ApiService {
  private axiosInstances: { [key: string]: AxiosInstance } = {};

  constructor() {
    this.axiosInstances['3000'] = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 1500,
    });

    this.axiosInstances['3001'] = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 1500,
    });

    this.axiosInstances['3002'] = axios.create({
      baseURL: 'http://localhost:3002',
      timeout: 1500,
    });
  }

  async get(endpoint: string, port = '3000'): Promise<any> {
    try {
      const response = await this.axiosInstances[port].get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`❌ Erro ao chamar API: http://localhost:${port}${endpoint}`);
      console.error(`📌 Código do erro: ${error.response?.status || 'N/A'}`);
      console.error(`📌 Detalhes: ${error.response?.data || error.message}`);

      return { error: true, message: `Erro ao acessar ${endpoint} no serviço ${port}` };
    }
  }
}
