---
sidebar_position: 4
sidebar_label: "Requisitos"
---

# Lista de Requisitos 

<br>

## Requisitos Funcionais (RF)

RF1. O sistema impede que um paciente esteja agendado em mais de uma consulta no mesmo dia e no mesmo horário.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF2. O sistema impede agendamentos fora do expediente da clínica.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF3. O sistema valida se o paciente está cadastrado antes de vincular um novo prontuário eletrônico a ele.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature: - F2** Criação de Perfis de Usuário
   - **História de Usuário - US5:** Segurança e Proteção


RF4. O sistema não permite agendamentos no passado.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
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


RF7. O sistema garante que cada paciente ou médico tenha um cadastro único, identificado pelo CPF, contendo mais informações obrigatórias.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F2:** Criação de Perfis de Usuário
   - **História de Usuário - US5:** Segurança e proteção


RF8. Administradores podem cadastrar, editar e excluir dados de médicos, pacientes, planos e agendamentos.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F2:** Criação de Perfis de Usuário
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF9. Apenas médicos podem acessar ou editar prontuários.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C2:** Gestão de Prontuários
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US3:** Prontuário Eletrônico


RF10. O sistema armazena prontuários arquivados de forma segura, em que apenas os médicos têm acesso, ou também um acesso fornecido sob solicitação do paciente ou médico.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C2:** Gestão de Prontuários
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US3:** Prontuário Eletrônico


RF11. O sistema integra-se ao Google Agenda para a criação de lembretes.
   - **Épico - E4:** Comunicação com Pacientes
   - **Capacidade - C3:** Interação com Pacientes
   - **Feature - F1:** Integração com Google Agenda
   - **História de Usuário - US2:** Receber Lembretes de Consultas e/ou Remédios


RF12. O sistema exibe um alerta caso um paciente tente agendar em um horário já ocupado.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F5:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF13. O sistema impede dois pacientes agendados no mesmo dia e horário com o mesmo médico.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF14. O sistema exibe um aviso e impede o cadastro caso todos os campos obrigatórios não sejam preenchidos.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins


RF15. O sistema criptografa os dados dos pacientes, incluindo prontuários e dados pessoais.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis
   - **História de Usuário - US5:** Segurança e proteção


RF16. O sistema exige login e senha para acesso.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F2:** Criação de Perfis de Usuário
   - **História de Usuário - US4:** Acesso a funcionalidades do sistema


RF17. O sistema impede o compartilhamento de informações dos pacientes sem autorização.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis
   - **História de Usuário - US5:** Segurança e proteção


RF18. O sistema permite a criação de um usuário administrador, que será responsável por cadastrar médicos, pacientes, planos e agendamentos.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US1:** Funcionalidades dos Admins

RF19. O sistema permite uma navegação simples e responsiva.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência

RF20. O sistema permite o gerenciamento (adionar, editar e excluir) de medicamentos.
   - **Épico - E5:** Gestão de Tratamentos e Prescrições
   - **Capacidade - C6:** Gestão de Medicamentos
   - **Feature - F8:** Geração de Remédios
   - **História de Usuário - US9:** Acompanhamento de Tratamento

RF21. O sistema valida se a quantidade de dias e horários do remédio que o paciente cadastra sejam valores 
positivos e maiores que 1.
   - **Épico - E5:** Gestão de Tratamentos e Prescrições
   - **Capacidade - C6:** Gestão de medicamentos
   - **Feature - F8:** Geração de Remédios
   - **História de Usuário - US9:** Acompanhamento de Tratamento

RF22. O sistema valida os campos de cadastro de médicos, pacientes e planos de saúde conforme regras específicas (apenas letras ou números, tamanho máximo, etc.).
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C5:** Validação e Padronização dos Dados
   - **Feature - F6:** Validação e Padronização de Dados no Cadastro
   - **História de Usuário - US8:** Cadastro Seguro e Padronizado

RF23. O sistema preenche automaticamente o nome e CRM do médico na receita (prescrição) médica e impede sua edição.
   - **Épico - E5:** Gestão de Tratamentos e Prescrições
   - **Capacidade - C2:** Gestão de Prontuários
   - **Feature - F5:** Geração de Prontuários e Receitas 
   - **História de Usuário - US3:** Prontuário Eletrônico e Receitas

RF24. O sistema exibe gráficos estatísticos, como número de médicos por especialidade e quantidade de planos de saúde por paciente.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C7:** Análise de Dados e Relatórios*
   - **Feature - F9:** Painel de Estatísticas e Relatórios
   - **História de Usuário - US10:** Acompanhar Estatísticas da Clínica

RF25. O sistema aceita apenas e-mails em formato válido (texto@dominio) no processo de recuperação de senha
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis
   - **História de Usuário - US11:** Recuperação Segura de Senhas

<br>

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
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Escalabilidade

RNF4. O sistema deve ser capaz de escalar para manter o desempenho em caso de alto tráfego.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Compatibilidade

RNF5. O sistema deve ser compatível com navegadores modernos.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
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
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


RNF8. O sistema deve ser responsivo.
   - **Épico - E1:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Confiabilidade

RNF9. O sistema deve estar disponível em grande parte do tempo, com tolerância a falhas em caso de picos de acesso.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US6:** Rapidez e Eficiência


### Manutenabilidade

RNF10. O código deve ser modular (arquitetura limpa e documentação da API) e documentado, permitindo fácil manutenção e atualização.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US7:** Crescimento do Software


RNF11. O sistema deve permitir a atualização ou adição de novas funcionalidades sem impacto nas existentes.
   - **Épico - E3:** Gestão de Agendamentos
   - **Capacidade - C1:** Sistema de Agendamentos Automatizados
   - **Feature - F4:** Organização do Sistema
   - **História de Usuário - US7:** Crescimento do Software


### Legalidade

RNF12. O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados (LGPD) ou com as leis locais de proteção de dados aplicáveis.
   - **Épico - E2:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade - C4:** Conformidade com Segurança e LGPD
   - **Feature - F3:** Criptografia de Dados Sensíveis 
   - **História de Usuário - US5:** Segurança e proteção

