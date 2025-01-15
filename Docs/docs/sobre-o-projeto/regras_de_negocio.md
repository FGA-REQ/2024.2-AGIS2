---
sidebar_position: 2
sidebar_label: "Regras de Negócio"
---

# Regras de Negócio - MedManager

## Regras de Restrição

### Restrições de Agendamento
- Um paciente não pode agendar mais de uma consulta no mesmo dia e horário.
- Um paciente não pode agendar consultas fora do expediente da clínica.
- Um paciente não pode marcar consultas, acessar registros ou acompanhar tratamento sem um cadastro com confirmação dos dados pessoais.
- O sistema deve permitir agendamentos com antecedência mínima de 24 horas.
- O sistema deve informar ao paciente se há disponibilidade antes do cadastro.

### Restrições de Cadastro
- O sistema deve permitir a criação de dois tipos de perfil: médico e paciente.
- O sistema deve ter diferentes funcionalidades dependendo do tipo de perfil logado.
- O sistema deve informar quais planos de saúde são aceitos no momento do cadastro.
- Cada paciente deve ter cadastro único, identificado pelo CPF, incluindo informações obrigatórias e opcionais.
- O sistema conta com administradores capazes de cadastrar e editar os dados de médicos e pacientes no software.

### Restrições de Prontuário
- Somente médicos ou autorizados podem acessar ou editar um prontuário.
- Prontuários arquivados devem ser armazenados de forma segura para acesso sob solicitação.

## Regras de Derivação

### Lembretes de Consulta
- Enviar lembrete de consulta automaticamente no dia anterior à data marcada.
- Somente o paciente pode confirmar o agendamento por meio do lembrete.
- Uma consulta será marcada se e somente se o paciente confirmar.
- O sistema deve ser vinculado ao Google Agenda para criar os lembretes.

## Regras de Cálculo
- O sistema calcula automaticamente o horário de envio de lembretes, tanto de confirmação quanto de medicamentos.
- O sistema deve enviar os lembretes de consultas com 24 horas e 2 horas de antecedência.

## Regras de Diretriz

### Alerta de Conflito de Horário
- Caso um paciente tente agendar uma consulta em um horário já ocupado, o sistema exibirá um alerta com horários alternativos disponíveis.
- Caso um paciente tente agendar uma consulta no mesmo horário e no mesmo dia que já possui outra marcada, será exibido um alerta com horários alternativos disponíveis.

### Cadastro Incompleto
- Se o cadastro do paciente não tiver todos os campos obrigatórios preenchidos, o sistema exibirá um aviso e não permitirá o agendamento.

## Regras de Causa e Efeito

### Cancelamento Automático
- Caso o paciente não confirme a consulta até o início do expediente no mesmo dia da clínica, a consulta será automaticamente cancelada.
- Caso o paciente se atrase, um aviso deve ser enviado.

## Regras de Estímulo e Resposta
- Caso tenha necessidade de uso de medicamento:
  - Se o usuário cadastrar os horários de uso deste medicamento, ele deve receber um lembrete 15 minutos antes.

## Regras de Segurança e Privacidade
- O sistema deve criptografar os dados dos pacientes, como prontuários e dados pessoais.
- Apenas usuários identificados possuem acesso ao sistema, via login e senha.
- Informações do paciente não podem ser compartilhadas sem a devida autorização.