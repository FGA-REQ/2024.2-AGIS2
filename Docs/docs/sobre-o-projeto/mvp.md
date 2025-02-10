---
sidebar_position: 10
sidebar_label: "MVP"
---

# MVP

O MVP (Produto Mínimo Viável), prioriza as funcionalidades básicas do sistema para que haja uma validação da proposta com um esforço mínimo de desenvolvimento. É uma primeira versão do produto para que o cliente possa fornecer feedbacks para o desenvolvimento futuro do produto a fim de garantir que o resultado final atenderá as expectativas.


## Objetivo do MVP
- Validar a capacidade do sistema em gerir agendamentos e comunicação com pacientes.
- Oferecer uma básica experiência do sistema, mostrando os lembretes automatizados e prontuários eletrônicos.


## Funcionalidades essenciais do MVP
1. Login e Recuperação de senha
2. Coordenação de Agendamentos (filtros por especialidade e médico, restrição de horários ocupados)
3. Comunicação com Pacientes (lembretes automáticos de consultas e medicamentos)
4. Cadastro e Gerenciamento de Usuários (pacientes, médicos e administradores)
5. Segurança e Privacidade (criptografia de senhas e dados sensíveis)
6. Prontuário Eletrônico (histórico de atendimentos e receitas médicas)


## Fluxo do MVP

### Paciente
- Opção de alterar senha;
- Cadastro de medicamento;
- Recebimento de lembrete automático antes da consulta;
- Possibilidade de confirmar ou cancelar a consulta pelo lembrete automático;
- Recebimento de lembrete automático um pouco antes do horário cadastrado de tomar o remédio.
- Vizualização de suas consultas agendadas.


### Médico
- Opção de alterar senha;
- Acesso a uma agenda com consultas vinculada ao mesmo;
- Escrita de novos prontuários;
- Visualização do histórico de prontuários;
- Escrita e opção de impressão de receita;


### Administrador
- Opção de alterar senha;
- Gerenciamento (adicionar, editar e excluir) de cadastros de médicos, pacientes e planos;
- Gerenciamento de agendamentos;
- Vizualização de gráficos pré-definidos;


# Tecnologias para o MVP
**Back-end**
- Framework: Nest.js
- Banco de Dados: PostgreSQL
- API: Implementação básica com o front-end (Axios) e integração com Google Agenda e WhatsApp.

**Front-end**
- Framework: React
- UI: Design simples e responsivo
- UX: Experiência de navegação com o mínimo de complexidade

**Integração**
- WhatsApp API
- Google Agenda API

**Documentação**
- Documentação feita utilizando o Docussaurus para maior organização
Utilizar a GitPage do projeto para manter as atualizações mais recentes.

**Organização**
- Utilização do Miro como ferramenta de suporte. [Link](https://miro.com/app/board/uXjVLwHaqu4=/)


## Vídeo de apresentação com o cliente

- [Link](https://youtu.be/xjI0AW3fs_A)

## Vídeo do funcoinamento do sistema

- 