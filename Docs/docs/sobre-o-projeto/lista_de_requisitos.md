---
sidebar_position: 4
sidebar_label: "Requisitos"
---

# Lista de Requisitos - MedManager

## Requisitos Funcionais

1. O sistema deve impedir que um paciente agende mais de uma consulta no mesmo dia e no mesmo horário.
2. O sistema deve impedir agendamentos fora do expediente da clínica.
3. O sistema deve validar se o paciente está cadastrado e com dados confirmados antes de permitir qualquer ação.
4. O sistema deve permitir agendamentos com antecedência mínima de 24 horas.
5. O sistema deve permitir a criação de dois tipos de perfil, por um perfil administrador: médico e paciente.
6. O sistema deve oferecer funcionalidades e restrições diferentes conforme o tipo de perfil logado.
7. O sistema deve garantir que cada paciente tenha um cadastro único, identificado pelo CPF, contendo informações obrigatórias e opcionais.
8. Administradores devem poder cadastrar e editar dados de médicos e pacientes.
9. Apenas médicos ou usuários autorizados podem acessar ou editar prontuários.
10. O sistema deve armazenar prontuários arquivados de forma segura, com acesso fornecido sob solicitação do paciente ou médico.
11. O sistema deve enviar lembretes automáticos de consultas no dia anterior à consulta.
12. O paciente deve poder confirmar o agendamento por meio do lembrete.
13. O sistema deve integrar-se ao Google Agenda para a criação de lembretes.
14. O sistema deve marcar a consulta apenas se o paciente confirmar.
15. O sistema deve exibir um alerta com horários alternativos caso um paciente tente agendar em um horário já ocupado.
16. O sistema deve exibir um alerta caso o paciente tente agendar no mesmo dia e horário de outra consulta já marcada.
17. O sistema deve exibir um aviso e impedir agendamentos caso o cadastro do paciente esteja incompleto.
18. O sistema deve enviar um aviso ao paciente em caso de atraso para a consulta.
19. O sistema deve enviar lembretes 15 minutos antes do horário cadastrado para uso do medicamento.
20. O sistema deve criptografar os dados dos pacientes, incluindo prontuários e dados pessoais.
21. O sistema deve exigir login e senha para acesso.
22. O sistema deve impedir o compartilhamento de informações dos pacientes sem autorização.
23. O sistema deve permitir a criação de um usuário administrador, que será responsável por cadastrar médicos e pacientes.

## Requisitos Não Funcionais

### Segurança
1. Os dados dos pacientes e médicos devem ser armazenados usando criptografia de ponta a ponta.
2. O sistema deve oferecer autenticação robusta, garantindo acesso apenas a usuários identificados.

### Desempenho
1. Páginas, dados e outros componentes não dependentes de requisições ao servidor devem carregar em até 2 segundos.

### Escalabilidade
1. O sistema deve ser capaz de escalar para manter o desempenho em caso de alto tráfego.

### Compatibilidade
1. O sistema deve ser compatível com navegadores modernos e dispositivos móveis.
2. A integração com o Google Agenda deve funcionar de forma transparente e eficiente.

### Usabilidade
1. O sistema deve apresentar uma interface intuitiva para pacientes, médicos e administradores.
2. O sistema deve ser responsivo.

### Confiabilidade
1. O sistema deve estar disponível em grande parte do tempo, com tolerância a falhas em caso de picos de acesso.

### Manutenabilidade
1. O código deve ser modular e documentado, permitindo fácil manutenção e atualização.
2. O sistema deve permitir a atualização ou adição de novas funcionalidades sem impacto nas existentes.

### Legalidade
1. O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados (LGPD) ou com as leis locais de proteção de dados aplicáveis.
