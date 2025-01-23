#!/bin/bash
if ! command -v node &> /dev/null
then
    echo "NodeJS não está instalado. Por favor, instale o NodeJS para continuar."
    exit 1
fi
read -p "Digite o nome do novo serviço em kebab-case (ex.: nome-do-servico): " serviceName
npx @nestjs/cli new $serviceName
cd $serviceName
npm install @prisma/client
npx prisma init
cat <<EOT >> src/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.\$connect();
  }
}
EOT
echo "Service criado com sucesso! Para adicionar um novo resource execute o comando 'npx nest generate resouce'. O resto é com você ^^"