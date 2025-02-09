import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class ApiService {
    constructor(private httpService: HttpService) {}
    private readonly logger = new Logger(ApiService.name);
    async getPatient(CPF:string): Promise<any> {
        try {   
            const url = process.env.AUTH_SERVICE_URL;
            const response$ = this.httpService.get(`${url}/patients/${CPF}`);
            const response = await firstValueFrom(response$);
            return response;
        } catch (error) {
            this.logger.error(error);
        }        
    }
}
