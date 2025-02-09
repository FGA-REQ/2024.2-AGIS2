import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
// import * as dotenv from 'dotenv';

// dotenv.config();

@Injectable()
export class ApiService {
  private axiosInstances: AxiosInstance;

  constructor() {
    this.axiosInstances = axios.create({
      timeout: 2500,
    });
  }

  async get(endpoint: string, service: 'SCHEDULE' | 'AUTH' | 'DRUG'): Promise<any> {
    try {
      const baseUrl = this.getServiceUrl(service);
      const response = await this.axiosInstances.get(`${baseUrl}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`❌ Erro ao chamar API: ${endpoint} em ${service}`);
      console.error(`📌 Código do erro: ${error.response?.status || 'N/A'}`);
      console.error(`📌 Detalhes: ${error.response?.data || error.message}`);

      return { error: true, message: `Erro ao acessar ${endpoint} no serviço ${service}` };
    }
  }

  private getServiceUrl(service: 'SCHEDULE' | 'AUTH' | 'DRUG'): string {
    switch (service) {
      case 'SCHEDULE':
        return process.env.SCHEDULE_SERVICE_URL || 'http://localhost:3000';
      case 'AUTH':
        return process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
      case 'DRUG':
        return process.env.DRUG_SERVICE_URL || 'http://localhost:3002';
      default:
        throw new Error(`Serviço desconhecido: ${service}`);
    }
  }
}
