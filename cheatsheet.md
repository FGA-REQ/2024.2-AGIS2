# Cheatsheet
Comandos comumente usados no processo de desenvolvimento

## Criando um novo serviço

* ```make new-service```
    * Cria um novo projeto do NestJS para um novo serviço
## NestJS

* ```npx nest generate resource```
    * Cria um novo resource no NestJS com os CRUDs pré codados
* ```npm run start:dev```
    * Inicia o servidor de modo que ele reinicia a cada vez que você salva um arquivo
* ```npm run start:debug```
    * Inicia o servidor em modo de debug
* ```npx prisma generate```
    * Atualiza os tipos do Prisma
* ```npx prisma migrate dev```
    * Sincroniza o banco de dados com o schema do arquivo schema.prisma. Após alterar os models execute esse comando
