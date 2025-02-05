---
sidebar_position: 4
sidebar_label: "Requisitos"
---

# Lista de Requisitos 

## Requisitos Funcionais (RF)

RF1. O sistema impede que um paciente agende mais de uma consulta no mesmo dia e no mesmo horário.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF2. O sistema impede agendamentos fora do expediente da clínica.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF3. O sistema valida se o paciente está cadastrado e com dados confirmados antes de permitir qualquer ação.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature: - F2** Criação de Perfis de Usuário
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF4. O sistema não permite agendamentos no passado.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF5. O sistema permite a criação de dois tipos de perfil, por um perfil administrador: médico e paciente.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F2:** Criação de Perfis de Usuário
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF6. O sistema oferece funcionalidades e restrições diferentes conforme o tipo de perfil logado.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F2:** Criação de Perfis de Usuário
   - **História de Usuário - US4:** Acesso a funcionalidades do sistema


RF7. O sistema garante que cada paciente ou médico tenha um cadastro único, identificado pelo CPF, contendo informações obrigatórias e opcionais.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F2:** Criação de Perfis de Usuário
   - **História de Usuário - US5:** Segurança e proteção


RF8. Administradores podem cadastrar, editar e excluir dados de médicos, pacientes, planos e agendamentos.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F2:** Criação de Perfis de Usuário
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF9. Apenas médicos ou usuários autorizados podem acessar ou editar prontuários.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C2:** Gestão de Prontuários
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US3:** Prontuário Eletrônico


RF10. O sistema armazena prontuários arquivados de forma segura, com acesso fornecido sob solicitação do paciente ou médico.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C2:** Gestão de Prontuários
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US3:** Prontuário Eletrônico


RF11. O sistema envia lembretes automáticos de consultas no dia anterior à consulta.
   - **Épico - E4:** Comunicação com Pacientes
   - **Capacidade - C3:** Interação com Pacientes
   - **Feature - F4:** Integração com WhatsApp
   - **História de Usuário - US2:** Receber Lembretes de Consultas e/ou Remédios


RF12. O paciente pode confirmar o agendamento por meio do lembrete.
   - **Épico - E4:** Comunicação com Pacientes
   - **Capacidade - C3:** Interação com Pacientes
   - **Feature - F4:** Integração com o WhatsApp
   - **História de Usuário - US2:** Receber Lembretes de Consultas e/ou Remédios


RF13. O sistema integra-se ao Google Agenda para a criação de lembretes.
   - **Épico - E4:** Comunicação com Pacientes
   - **Capacidade - C3:** Interação com Pacientes
   - **Feature - F1:** Integração com Google Agenda
   - **História de Usuário - US2:** Receber Lembretes de Consultas e/ou Remédios


RF14. O sistema exibe um alerta com horários alternativos caso um paciente tente agendar em um horário já ocupado.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF15. O sistema exibe um alerta caso o paciente tente agendar no mesmo dia e horário de outra consulta já marcada.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF16. O sistema exibe um aviso e impedir agendamentos caso o cadastro do paciente esteja incompleto.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF17. O sistema envia lembretes 15 minutos antes do horário cadastrado para uso do medicamento.
   - **Épico - E4:** Comunicação com Pacientes
   - **Capacidade - C3:** Interação com Pacientes
   - **Feature - F4:** Integração com WhatsApp
   - **História de Usuário - US2:** Receber Lembretes de Consultas e/ou Remédios


RF18. O sistema criptografa os dados dos pacientes, incluindo prontuários e dados pessoais.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis
   - **História de Usuário - US5:** Segurança e proteção


RF19. O sistema exige login e senha para acesso.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F2:** Criação de Perfis de Usuário
    **História de Usuário - US4:** Acesso a funcionalidades do sistema


RF20. O sistema impede o compartilhamento de informações dos pacientes sem autorização.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis
   - **História de Usuário - US5:** Segurança e proteção


RF21. O sistema permite a criação de um usuário administrador, que será responsável por cadastrar médicos, pacientes, planos e agendamentos.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


## Requisitos Não Funcionais (RNF)

### Segurança

RNF1. Os dados dos pacientes, médicos e planos devem ser armazenados usando criptografia de ponta a ponta.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US5:** Segurança e proteção


RNF2. O sistema deve oferecer autenticação robusta, garantindo acesso apenas a usuários identificados.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US5:** Segurança e proteção


### Desempenho

RNF3. Páginas, dados e outros componentes não dependentes de requisições ao servidor devem carregar em até 2 segundos.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Escalabilidade

RNF4. O sistema deve ser capaz de escalar para manter o desempenho em caso de alto tráfego.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Compatibilidade

RNF5. O sistema deve ser compatível com navegadores modernos e dispositivos móveis.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


RNF6. A integração com o Google Agenda deve funcionar de forma transparente e eficiente.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C3:** Interação com Pacientes
   - **Feature - F1:** Integração com Google Agenda
   - **História de Usuário - US6:** Rapidez e Eficiência


### Usabilidade

RFN7. O sistema deve apresentar uma interface intuitiva para pacientes, médicos e administradores.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


RNF8. O sistema deve ser responsivo.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Confiabilidade

RNF9. O sistema deve estar disponível em grande parte do tempo, com tolerância a falhas em caso de picos de acesso.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Manutenabilidade

RNF10. O código deve ser modular e documentado, permitindo fácil manutenção e atualização.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US7:** Crescimento do Software


RNF11. O sistema deve permitir a atualização ou adição de novas funcionalidades sem impacto nas existentes.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US7:** Crescimento do Software


### Legalidade

RNF12. O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados (LGPD) ou com as leis locais de proteção de dados aplicáveis.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US5:** Segurança e proteção
