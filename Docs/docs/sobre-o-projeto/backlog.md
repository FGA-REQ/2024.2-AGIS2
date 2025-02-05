---
sidebar_position: 5
sidebar_label: "Backlog"
---

# Backlog 

No contexto do **SAFe (Scaled Agile Framework)**, as estruturas **Épicos**, **Capacidades**, **Features** e **Histórias de Usuário** representam os níveis hierárquicos de planejamento e detalhamento no backlog do produto. Aqui está o que cada uma delas significa:

### **Resumo do Fluxo Hierárquico**

1. **Épicos (E)**  
   Grandes iniciativas estratégicas que direcionam os objetivos do produto e orientam os investimentos em desenvolvimento.

2. **Capacidades (C)**  
   Funcionalidades amplas que conectam os Épicos às entregas concretas, alinhadas aos objetivos estratégicos dentro de um programa.

3. **Features (F)**  
   Funcionalidades específicas que entregam valor diretamente ao cliente, representando entregas tangíveis e menores do que Capacidades.

4. **Histórias de Usuário (User Stories (US))**  
   Unidades de trabalho detalhadas que descrevem uma necessidade específica do usuário e são implementadas diretamente pelas equipes.

Essas estruturas ajudam a organizar e priorizar o trabalho de forma escalável, garantindo que o desenvolvimento esteja alinhado com os objetivos de negócios e entregando valor continuamente.

---


# Backlog do Produto no Contexto SAFe

O backlog do produto apresentado a seguir, reflete as principais funcionalidades e requisitos do sistema MedManager, que visa otimizar a gestão de consultas, prontuários e comunicação com pacientes, garantindo conformidade com as melhores práticas de segurança e privacidade de dados.

As **Features** estão organizadas em grupos baseados nas **Capacidades** às quais elas pertencem, como indicado pelos códigos entre parênteses (ex.: C4). Cada código refere-se a uma **Capacidade** do sistema, facilitando o rastreamento e a priorização dentro do contexto do planejamento do backlog. Essa abordagem garante que as **Features** contribuam diretamente para os objetivos definidos por cada **Capacidade**, promovendo alinhamento estratégico e eficiência no desenvolvimento. 


### **Epics**

#### **E1. Otimizar a Experiência de Agendamento e Gestão Médica**
**Descrição:** Desenvolver um sistema integrado para gerenciar agendamentos, prontuários e comunicação com pacientes, com foco em reduzir a evasão e melhorar a experiência.
**Critérios de Aceitação:**  
- O sistema deve suportar a integração com calendários pessoais e enviar lembretes automáticos.
- Deve estar em conformidade com a LGPD.


#### **E2. Garantir a Segurança e Privacidade dos Dados Médicos**
**Descrição:** Implementar criptografia de ponta a ponta para todos os dados sensíveis, garantindo acesso somente a usuários autenticados.
**Critérios de Aceitação:**  
- Dados devem ser armazenados de forma segura.
- O sistema deve registrar logins e tentativas de acesso.


#### **E3. Gestão de Agendamentos**
**Descrição:** Permitir que as clínicas gerenciem agendamentos com eficiência, integrando restrições e alertas para pacientes. 
**Critérios de Aceitação:**  
- O sistema deve gerar alertas automáticos para pacientes e médicos em caso de conflitos de agendamento (ex: tentativa de agendamento em horário já ocupado).
- O sistema deve oferecer a possibilidade de adiar ou reagendar consultas dentro de parâmetros definidos pela clínica.


#### **E4. Comunicação com Pacientes**
**Descrição:** Facilitar a comunicação direta com pacientes através de mensagens e lembretes automatizados via integração com Google Agenda e WhatsApp. 
**Critérios de Aceitação:**  
- O sistema deve enviar lembretes automáticos via WhatsApp ou e-mail, com 24 horas e 2 horas de antecedência da consulta.
- O sistema deve integrar-se com o Google Agenda para garantir que os agendamentos de consultas sejam sincronizados com os calendários pessoais dos pacientes e médicos.
- A comunicação deve ser automatizada, mas o sistema deve possibilitar que a clínica envie mensagens específicas para pacientes individualmente.



### **Capabilities (C)**

#### **C1. Sistema de Agendamentos Automatizados**
**Descrição:** Permitir que o sistema no geral funcione de maneira adequada e eficiênte. Além disso, permitir que administrador gerencie agendamentos com alertas de conflitos e lembretes integrados. Inclui a criação de perfis de usuário diferenciados e sincronização com Google Agenda.  
**Critérios de Aceitação:**  
- Não permitir agendar no passado ou fora do expediente.  
- Exibir horários alternativos em caso de conflitos.
- Status ativo e sem conflitos do sistema  


#### **C2. Gestão de Prontuários**
**Descrição:** Permitir o armazenamento e acesso seguro aos prontuários, com controle de acesso para médicos e autorizados. Inclui busca rápida e arquivamento de prontuários antigos.  
**Critérios de Aceitação:**  
- Prontuários devem ser acessíveis apenas por médicos autenticados.  
- Deve permanecer os prontuários no histórico.  


#### **C3. Interação com Pacientes**
**Descrição:** Lembretes automáticos de consulta (24h e 2h de antecedência) e notificações de medicamentos baseadas em horários cadastrados.  
**Critérios de Aceitação:**  
- Notificações sobre o agendamento, devem fornecer informações sobre a consulta, como local, horário e médico responsável.  
- Notificações de medicamentos devem chegar 15 minutos antes do horário cadastrado do remédio


#### **C4. Conformidade com Segurança e LGPD**
**Descrição:** Implementação de criptografia de ponta a ponta para dados sensíveis, autenticação com login e senha, e auditoria de acessos e alterações no sistema.  
**Critérios de Aceitação:**  
- Criação de diferentes tipos de perfis (administrador, paciente, médico) com diferentes níveis de acesso e apenas um cadastro único.
- Esquecimento de senha pelo e-mail.  



### **Features (F)**

#### **F1. Integração com Google Agenda (C3)**
**Descrição:** Sincronizar agendamentos com o calendário do Google do paciente e do médico.  
**Critérios de Aceitação:**  
- Lembretes devem ser enviados automaticamente.  
- Notificações de conflitos devem ser exibidas durante o agendamento.  


#### **F2. Criação de Perfis de Usuário (C4)**
**Descrição:** Permitir o cadastro de dois tipos de perfil (médico e paciente) com funcionalidades distintas.  
**Critérios de Aceitação:**  
- O sistema deve validar os dados do paciente no momento do cadastro.  
- O administrador deve ser capaz de editar perfis existentes.  


#### **F3. Criptografia de Dados Sensíveis (C4)**
**Descrição:** Implementar criptografia para dados como prontuários e informações pessoais.  
**Critérios de Aceitação:**  
- Dados devem ser armazenados criptografados no banco de dados.  
- O sistema deve registrar tentativas de acesso não autorizadas.  


#### **F4. Integração com WhatsApp (C3)**
**Descrição:** Enviar lembretes automáticos via WhatsApp para recordação de consulta.  
**Critérios de Aceitação:**  
- Paciente da clínica recebe a mensagem de atendimento com possibilidade de confirmação.


#### **F5. Organização do Sistema (C1)**
**Descrição:** Implementar calendário dinâmico para administradores e permitir agendamentos conforme as restrições, e CRUDs sem conflitos para todos os perfis.
**Critérios de Aceitação:**  
- Exibir horários alternativos em caso de conflito. 
- CRUDs funcionais 



### **User stories (US)**

#### **US1. Funcionalidades dos Admins**
**Como administrador**, quero agendar consultas e evitar conflitos de horário, também quero gerenciar médicos, planos e pacientes. 
**Critérios de Aceitação:**  
- O sistema deve validar o horário de agendamento.  
- Deve exibir mensagens de erro em caso de conflitos.  
- CRUDs funcionando.


#### **US2. Receber Lembretes de Consultas e/ou Remédios**
**Como paciente**, quero receber lembretes 24 horas antes da consulta para garantir que eu compareça no horário marcado e confirme, e, caso eu cadastre, receber lembretes também 15 minutos antes da hora que devo tomar remédio.
**Critérios de Aceitação:**  
- Notificações devem ser enviadas via WhatsApp ou e-mail.  
- O paciente deve poder confirmar a consulta pelo lembrete.     


#### **US3. Prontuário Eletrônico**
**Como médico**, quero acessar e editar os prontuários dos meus pacientes para gerenciar informações clínicas de forma segura.  
**Critérios de Aceitação:**  
- Apenas médicos autenticados devem ter acesso aos prontuários.  
- Alterações devem ser registradas com data, hora e nome do autor.   

#### **US4. Acesso a funcionalidades do sistema**
**Como usuário do sistema**, quero ter acesso as minhas funcionalidades disponíveis.  
**Critérios de Aceitação:**  
- O sistema deve diferenciar perfis
- O sistema deve mostrar as funcionalidades corretas de cada perfil

#### **US5. Segurança e proteção**
**Como usuário do sistema**, quero a LGPD, criptografia e segurança de dados pessoais, e não deixar não autorizados terem acesso.
**Critérios de Aceitação:**  
- Apenas médicos tem acesso aos prontuários
- Apenas os admins tem acesso a dados pessoais

#### **US6. Rapidez e Eficiência**
**Como usuário do sistema**, quero um bom e otimizado funcionamento do sistema, além disso um sistema fácil de utilizar.
**Critérios de Aceitação:**  
- Possibilidade de escalamento
- Carregamento rápido

#### **US7. Crescimento do Software**
**Como desenvolvedor do sistema**, quero uma boa documentação e facilidade em atualizar ou adicionar novas funcionalidades.
**Critérios de Aceitação:**  
- Documentação válida

