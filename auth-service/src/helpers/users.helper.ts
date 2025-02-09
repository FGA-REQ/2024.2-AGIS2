import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export class UsersHelper {
    static async hashPassword(password: string): Promise<string> {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    static validateCPFOrCNPJ(CPFOrCNPJ: string): string {
        const cleaned = CPFOrCNPJ.replaceAll(".", "").replace("-", "").replace("/", "");
        console.log(cleaned.length);
        if (cleaned.length === 11) {
            return cleaned;
        }
        if (cleaned.length === 14) {
            return cleaned;
        }
        throw new BadRequestException("CPF ou CNPJ inválido");
    }
}