import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:3000', 
      timeout: 1500, 
    });
  }

  async get(endpoint: string): Promise<any> {
    try {
      const response = await this.axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Erro ao chamar API: ${endpoint}`, error.message);
      return null;
    }
  }
}
