---
sidebar_position: 4
sidebar_label: "Requisitos"
---

# Lista de Requisitos - MedManager

## Requisitos Funcionais

## Requisitos Funcionais

1. O sistema deve impedir que um paciente agende mais de uma consulta no mesmo dia e no mesmo horário.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
2. O sistema deve impedir agendamentos fora do expediente da clínica.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
3. O sistema deve validar se o paciente está cadastrado e com dados confirmados antes de permitir qualquer ação.
   - **Épico:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Criação de Perfis de Usuário
4. O sistema deve permitir agendamentos com antecedência mínima de 24 horas.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
5. O sistema deve permitir a criação de dois tipos de perfil, por um perfil administrador: médico e paciente.
   - **Épico:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criação de Perfis de Usuário
6. O sistema deve oferecer funcionalidades e restrições diferentes conforme o tipo de perfil logado.
   - **Épico:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criação de Perfis de Usuário
7. O sistema deve garantir que cada paciente tenha um cadastro único, identificado pelo CPF, contendo informações obrigatórias e opcionais.
   - **Épico:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criação de Perfis de Usuário
8. Administradores devem poder cadastrar e editar dados de médicos e pacientes.
   - **Épico:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criação de Perfis de Usuário
9. Apenas médicos ou usuários autorizados podem acessar ou editar prontuários.
   - **Épico:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade:** Gestão de Prontuários
   - **Feature:** Prontuário Eletrônico
10. O sistema deve armazenar prontuários arquivados de forma segura, com acesso fornecido sob solicitação do paciente ou médico.
   - **Épico:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade:** Gestão de Prontuários
   - **Feature:** Prontuário Eletrônico
11. O sistema deve enviar lembretes automáticos de consultas no dia anterior à consulta.
   - **Épico:** Comunicação com Pacientes
   - **Capacidade:** Comunicação com Pacientes
   - **Feature:** Receber Lembretes de Consultas
12. O paciente deve poder confirmar o agendamento por meio do lembrete.
   - **Épico:** Comunicação com Pacientes
   - **Capacidade:** Comunicação com Pacientes
   - **Feature:** Receber Lembretes de Consultas
13. O sistema deve integrar-se ao Google Agenda para a criação de lembretes.
   - **Épico:** Comunicação com Pacientes
   - **Capacidade:** Comunicação com Pacientes
   - **Feature:** Integração com Google Agenda
14. O sistema deve marcar a consulta apenas se o paciente confirmar.
   - **Épico:** Comunicação com Pacientes
   - **Capacidade:** Comunicação com Pacientes
   - **Feature:** Receber Lembretes de Consultas
15. O sistema deve exibir um alerta com horários alternativos caso um paciente tente agendar em um horário já ocupado.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Alerta de Conflito de Horários
16. O sistema deve exibir um alerta caso o paciente tente agendar no mesmo dia e horário de outra consulta já marcada.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Alerta de Conflito de Horários
17. O sistema deve exibir um aviso e impedir agendamentos caso o cadastro do paciente esteja incompleto.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Cadastro de Usuários
18. O sistema deve enviar um aviso ao paciente em caso de atraso para a consulta.
   - **Épico:** Comunicação com Pacientes
   - **Capacidade:** Comunicação com Pacientes
   - **Feature:** Receber Lembretes de Consultas
19. O sistema deve enviar lembretes 15 minutos antes do horário cadastrado para uso do medicamento.
   - **Épico:** Comunicação com Pacientes
   - **Capacidade:** Comunicação com Pacientes
   - **Feature:** Lembretes de Medicamentos
20. O sistema deve criptografar os dados dos pacientes, incluindo prontuários e dados pessoais.
   - **Épico:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criptografia de Dados Sensíveis
21. O sistema deve exigir login e senha para acesso.
   - **Épico:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criação de Perfis de Usuário
22. O sistema deve impedir o compartilhamento de informações dos pacientes sem autorização.
   - **Épico:** Garantir a Segurança e Privacidade dos Dados Médicos
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criptografia de Dados Sensíveis
23. O sistema deve permitir a criação de um usuário administrador, que será responsável por cadastrar médicos e pacientes.
   - **Épico:** Otimizar a Experiência de Agendamento e Gestão Médica
   - **Capacidade:** Conformidade com Segurança e LGPD
   - **Feature:** Criação de Perfis de Usuário

## Requisitos Não Funcionais

### Segurança
1. Os dados dos pacientes e médicos devem ser armazenados usando criptografia de ponta a ponta.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
2. O sistema deve oferecer autenticação robusta, garantindo acesso apenas a usuários identificados.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos

### Desempenho
1. Páginas, dados e outros componentes não dependentes de requisições ao servidor devem carregar em até 2 segundos.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos

### Escalabilidade
1. O sistema deve ser capaz de escalar para manter o desempenho em caso de alto tráfego.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos

### Compatibilidade
1. O sistema deve ser compatível com navegadores modernos e dispositivos móveis.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
2. A integração com o Google Agenda deve funcionar de forma transparente e eficiente.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos

### Usabilidade
1. O sistema deve apresentar uma interface intuitiva para pacientes, médicos e administradores.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
2. O sistema deve ser responsivo.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos

### Confiabilidade
1. O sistema deve estar disponível em grande parte do tempo, com tolerância a falhas em caso de picos de acesso.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos

### Manutenabilidade
1. O código deve ser modular e documentado, permitindo fácil manutenção e atualização.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
2. O sistema deve permitir a atualização ou adição de novas funcionalidades sem impacto nas existentes.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos

### Legalidade
1. O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados (LGPD) ou com as leis locais de proteção de dados aplicáveis.
   - **Épico:** Gestão de Agendamentos
   - **Capacidade:** Sistema de Agendamentos Automatizados
   - **Feature:** Gestão de Agendamentos
