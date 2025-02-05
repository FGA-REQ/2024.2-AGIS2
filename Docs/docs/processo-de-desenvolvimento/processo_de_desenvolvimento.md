---
sidebar_position: 2
sidebar_label: "Processo de desenvolvimento"
---

# Processo de desenvolvimento do sistema 

O processo de desenvolvimento do sistema é dividido em etapas bem definidas, que incluem desde o planejamento inicial até a manutenção contínua do produto. Cada etapa desempenha um papel essencial para garantir que o sistema seja entregue de forma eficiente.

A tabela abaixo apresenta as principais atividades desse processo, destacando seus objetivos, os produtos de entrada e saída, as ferramentas e técnicas utilizadas, e o relacionamento entre as etapas:

| **Atividade**          | **Objetivo**                                                                 | **Produtos de Entrada**                                     | **Produtos de Saída**                                           | **Ferramentas/Técnicas**          | **Relacionamento**                                           |
|-------------------------|-----------------------------------------------------------------------------|------------------------------------------------------------|-----------------------------------------------------------------|------------------------------------|-------------------------------------------------------------|
| **Planejamento**        | Definir o escopo do sistema, identificar os requisitos iniciais e planejar as fases do projeto. | Documento de visão do produto, requisitos iniciais levantados, reunião com o stakeholder | Plano do projeto, cronograma, lista inicial dos requisitos e o escopo inicial | Reuniões, ferramentas de gestão   | Alimenta a etapa de **Análise de Requisitos**               |
| **Análise de Requisitos** | Levantar, documentar e validar os requisitos funcionais e não funcionais.  | Documento de visão do produto, feedback do stakeholder e do avaliador | Documento de requisitos detalhado, regras de negócio, e priorização dos requisitos | Entrevistas, reuniões, pesquisa e contato com o cliente | Base para as fases de **Design** e **Implementação**        |
| **Projeto (Design)**    | Criar a arquitetura do sistema, definir as interfaces e modelar os componentes do software. | Documento de requisitos e tecnologias definidas            | Protótipos de baixa fidelidade e modelagem de dados, backlog do produto | Figma                              | Orienta a **Implementação** e serve como base para os **Testes** |
| **Implementação**       | Desenvolver as funcionalidades do sistema conforme os requisitos e o design. | Design, documentação                                       | Código-fonte                                                   | React, NestJS, PostgreSQL          | As funcionalidades implementadas são testadas na próxima etapa de **Testes e Validação** |
| **Teste e Validação**   | Garantir que o sistema funcione conforme esperado e atenda aos requisitos.  | Código-fonte, casos de teste unitários e de integração     | Relatório de bugs, sistema validado e funcional, garantia de qualidade | Jest, Cypress                      | Bugs ou falhas detectados podem retornar para a fase de **Implementação** |
| **Entrega**             | Disponibilizar o sistema para o stakeholder.                               | Sistema validado, documentação de iniciação, ambiente configurado | Sistema em produção, ambiente configurado                      | Docker, CI/CD                      | Após esta etapa, inicia-se a fase de **Manutenção**         |
| **Manutenção**          | Realizar atualizações, corrigir falhas e atender às novas demandas do stakeholder. | Feedback do stakeholder, necessidade de ajustes contínuos | Melhorias e atualizações do sistema                           | Documentação, Git Pages            | Esta fase é contínua e alimenta novas iterações do ciclo    |
