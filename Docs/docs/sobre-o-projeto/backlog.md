---
sidebar_position: 6
---

# Backlog - MedManager

No contexto do **SAFe (Scaled Agile Framework)**, as estruturas **Épicos**, **Capacidades**, **Features** e **Histórias de Usuário** representam os níveis hierárquicos de planejamento e detalhamento no backlog do produto. Aqui está o que cada uma delas significa:

### **Resumo do Fluxo Hierárquico**

1. **Épicos**  
   Grandes iniciativas estratégicas que direcionam os objetivos do produto e orientam os investimentos em desenvolvimento.

2. **Capacidades**  
   Funcionalidades amplas que conectam os Épicos às entregas concretas, alinhadas aos objetivos estratégicos dentro de um programa.

3. **Features**  
   Funcionalidades específicas que entregam valor diretamente ao cliente, representando entregas tangíveis e menores do que Capacidades.

4. **Histórias de Usuário**  
   Unidades de trabalho detalhadas que descrevem uma necessidade específica do usuário e são implementadas diretamente pelas equipes.

Essas estruturas ajudam a organizar e priorizar o trabalho de forma escalável, garantindo que o desenvolvimento esteja alinhado com os objetivos de negócios e entregando valor continuamente.

---


# Backlog do Produto no Contexto SAFe

O backlog do produto apresentado a seguir, reflete as principais funcionalidades e requisitos do sistema MedManager, que visa otimizar a gestão de consultas, prontuários e comunicação com pacientes, garantindo conformidade com as melhores práticas de segurança e privacidade de dados.

As **Features** estão organizadas em grupos baseados nas **Capacidades** às quais elas pertencem, como indicado pelos códigos entre parênteses (ex.: C4). Cada código refere-se a uma **Capacidade** do sistema, facilitando o rastreamento e a priorização dentro do contexto do planejamento do backlog. Essa abordagem garante que as **Features** contribuam diretamente para os objetivos definidos por cada **Capacidade**, promovendo alinhamento estratégico e eficiência no desenvolvimento. 


### **Epics**

#### **1. Otimizar a Experiência de Agendamento e Gestão Médica**
**Descrição:** Desenvolver um sistema integrado para gerenciar agendamentos, prontuários e comunicação com pacientes, com foco em reduzir a evasão e melhorar a experiência.
**Critérios de Aceitação:**  
- O sistema deve suportar a integração com calendários pessoais e enviar lembretes automáticos.
- Deve estar em conformidade com a LGPD.

#### **2. Garantir a Segurança e Privacidade dos Dados Médicos**
**Descrição:** Implementar criptografia de ponta a ponta para todos os dados sensíveis, garantindo acesso somente a usuários autenticados.
**Critérios de Aceitação:**  
- Dados devem ser armazenados de forma segura.
- O sistema deve registrar logins e tentativas de acesso.


### **Capabilities**

#### **1. Sistema de Agendamentos Automatizados**
**Descrição:** Permitir que pacientes e médicos gerenciem agendamentos com alertas de conflitos e lembretes integrados. Inclui a criação de perfis de usuário diferenciados e sincronização com Google Agenda.  
**Critérios de Aceitação:**  
- Deve suportar marcação com 24 horas de antecedência.  
- Exibir horários alternativos em caso de conflitos.  


#### **2. Gestão de Prontuários**
**Descrição:** Permitir o armazenamento e acesso seguro aos prontuários, com controle de acesso para médicos e autorizados. Inclui busca rápida e arquivamento de prontuários antigos.  
**Critérios de Aceitação:**  
- Prontuários devem ser acessíveis apenas por médicos autenticados.  
- Deve incluir registro de alterações no prontuário.  


#### **3. Comunicação com Pacientes**
**Descrição:** Lembretes automáticos de consulta (24h e 2h de antecedência) e notificações de medicamentos baseadas em horários cadastrados.  
**Critérios de Aceitação:**  
- Notificações devem fornecer informações sobre a consulta, como local, horário e médico responsável.  


#### **4. Conformidade com Segurança e LGPD**
**Descrição:** Implementação de criptografia de ponta a ponta para dados sensíveis, autenticação com login e senha, e auditoria de acessos e alterações no sistema.  
**Critérios de Aceitação:**  
- Criação de diferentes tipos de perfis (administrador, paciente, médico) com diferentes níveis de acesso.  



### **Features**

#### **1. Integração com Google Agenda (C3)**
**Descrição:** Sincronizar agendamentos com o calendário do Google do paciente e do médico.  
**Critérios de Aceitação:**  
- Lembretes devem ser enviados automaticamente.  
- Notificações de conflitos devem ser exibidas durante o agendamento.  


#### **2. Criação de Perfis de Usuário (C4)**
**Descrição:** Permitir o cadastro de dois tipos de perfil (médico e paciente) com funcionalidades distintas.  
**Critérios de Aceitação:**  
- O sistema deve validar os dados do paciente no momento do cadastro.  
- O administrador deve ser capaz de editar perfis existentes.  


#### **3. Criptografia de Dados Sensíveis (C4)**
**Descrição:** Implementar criptografia para dados como prontuários e informações pessoais.  
**Critérios de Aceitação:**  
- Dados devem ser armazenados criptografados no banco de dados.  
- O sistema deve registrar tentativas de acesso não autorizadas.  


#### **4. Integração com WhatsApp (C3)**
**Descrição:** Enviar lembretes automáticos via WhatsApp para recordação de consulta.  
**Critérios de Aceitação:**  
- Paciente da clínica recebe a mensagem de auto entendimento.  


#### **5. Gestão de Agendamentos (C1)**
**Descrição:** Implementar calendário dinâmico para médicos e administradores e permitir agendamentos com antecedência mínima de 24 horas.  
**Critérios de Aceitação:**  
- Exibir horários alternativos em caso de conflito.  



### **User stories**

#### **Agendamento de Consultas**
**Como paciente**, quero agendar consultas com antecedência de 24 horas para evitar conflitos de horário.  
**Critérios de Aceitação:**  
- O sistema deve validar o horário de agendamento.  
- Deve exibir mensagens de erro em caso de conflitos.  


#### **Receber Lembretes de Consultas**
**Como paciente**, quero receber lembretes 24 horas antes da consulta para garantir que eu compareça no horário marcado.  
**Critérios de Aceitação:**  
- Notificações devem ser enviadas via WhatsApp ou e-mail.  
- O paciente deve poder confirmar a consulta pelo lembrete.  


#### **Gestão de Agendamentos**
**Como paciente**, quero ser notificado com antecedência caso minha consulta esteja marcada fora do horário permitido, para que eu possa escolher outro horário.  
**Critérios de Aceitação:**  
- Notificação enviada imediatamente após o conflito ser detectado.  


#### **Cadastro de Usuários**
**Como paciente**, quero me cadastrar no sistema para acessar funcionalidades como agendamento e lembretes.  
**Critérios de Aceitação:**  
- O cadastro deve exigir campos obrigatórios (nome, CPF, e-mail).  
- O sistema deve validar se o CPF já está cadastrado.  


#### **Alerta de Conflito de Horários**
**Como paciente**, quero ser informado sobre horários alternativos disponíveis quando tento marcar uma consulta em um horário já ocupado.  
**Critérios de Aceitação:**  
- O sistema deve exibir uma lista de horários alternativos.  
- Deve impedir o agendamento de mais de uma consulta no mesmo horário.  


#### **Prontuário Eletrônico**
**Como médico**, quero acessar e editar os prontuários dos meus pacientes para gerenciar informações clínicas de forma segura.  
**Critérios de Aceitação:**  
- Apenas médicos autenticados devem ter acesso aos prontuários.  
- Alterações devem ser registradas com data, hora e nome do autor.  


#### **Relatórios de Consultas**
**Como administrador**, quero gerar relatórios mensais sobre agendamentos para monitorar a performance da clínica.  
**Critérios de Aceitação:**  
- O relatório deve incluir o número de consultas realizadas e canceladas.  
- Deve ser possível exportar o relatório em PDF e Excel.  


#### **Lembretes de Medicamentos**
**Como paciente**, quero cadastrar horários para tomar medicamentos para receber lembretes automáticos.  
**Critérios de Aceitação:**  
- Lembretes devem ser enviados 15 minutos antes do horário cadastrado.  
- O paciente deve poder editar ou excluir lembretes.  


#### **Cancelamento Automático de Consultas**
**Como administrador**, quero que consultas sejam canceladas automaticamente quando o paciente não confirmar até o início do expediente.  
**Critérios de Aceitação:**  
- O sistema deve enviar um aviso ao paciente antes de cancelar a consulta.  
- Consultas canceladas devem ser registradas para relatórios.  
