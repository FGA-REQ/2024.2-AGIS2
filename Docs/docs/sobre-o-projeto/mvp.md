---
sidebar_position: 10
sidebar_label: "MVP"
---

# MVP - MedManager

O MVP (Produto Mínimo Viável), prioriza as funcionalidades básicas do sistema para que haja uma validação da proposta com um esforço mínimo de desenvolvimento. É uma primeira versão do produto para que o cliente possa fornecer feedbacks para o desenvolvimento futuro do produto a fim de garantir que o resultado final atenderá as expectativas.


## Objetivo do MVP
Validar a capacidade do sistema em gerir agendamentos e comunicação com pacientes.
Oferecer uma básica experiência do sistema, mostrando os lembretes automatizados e prontuários eletrônicos.


## Funcionalidades essenciais do MVP
1. Coordenação de Agendamentos
2. Comunicação com Pacientes
3. Cadastro Básico de Usuários
4. Segurança e Privacidade
5. Prontuário Eletrônico


## Fluxo do MVP

### Paciente
- Cadastro no sistema
- Agendamento de consulta em horário disponível
- Recebimento de lembrete automático antes da consulta
- Cadastro de medicamento para receber lembretes
- Opção de editar informações de perfil
- Opção de alterar senha

### Médico
- Acesso ao calendário com agendamentos para consulta com o mesmo
- Visualização e edição de prontuários
- Visualização do histórico de prontuários
- Escrita e opção de impressão de receita
- Opção de editar informações de perfil
- Opção de alterar senha

### Administrador
- Gerenciamento de cadastros (médicos, pacientes e planos)
- Visualização de agendamentos.
- Opção de editar informações de perfil
- Opção de alterar senha


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
