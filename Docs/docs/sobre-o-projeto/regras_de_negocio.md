---
sidebar_position: 2
sidebar_label: "Regras de Negócio"
---

# Regras de Negócio

## 1. Regras de Restrição

### **Tela de Login**
- O **campo de usuário** deve aceitar **apenas números** e deve ter **exatamente 11 dígitos** (CPF).
- O **campo de senha** deve ser **exibido com caracteres ocultos** (criptografado).
- Na **aba de alteração de senha**, o usuário deve informar o e-mail obrigatoriamente.
  - O formato do e-mail deve ser **texto@texto.texto**.
  - Caso o formato esteja incorreto, um alerta deve ser exibido.

### **Tela do Paciente**
- **Alteração de Senha**:
  - Precisa preencher os dois campos de nova senha e confirmação.
  - Os campos devem ser comparados em tempo real e precisam **iguais**, caso não seja um alerta deve ser exibido.
- **Consultas**:
  - O paciente pode visualizar **apenas suas próprias consultas**.
- **Cadastro de Remédios**:
  - Todos os campos são obrigatórios:
    - Nome do remédio
    - Local de ação (**apenas letras**)
    - Quantidade de dias (**apenas números positivos maiores que 1**)
    - Intervalo de horas (**apenas números positivos maiores que 1**)
  - Caso algum campo não seja preenchido corretamente, um alerta deve ser exibido.

### **Tela do Médico**
- **Alteração de Senha**:
  - Precisa preencher os dois campos de nova senha e confirmação.
  - Os campos devem ser comparados em tempo real e precisam **iguais**, caso não seja um alerta deve ser exibido.
- **Agenda de Consultas**:
  - O médico pode visualizar **apenas consultas vinculadas a ele**.
  - Consultas podem ser filtradas **por data**.
- **Atendimentos / Prontuário Eletrônico**:
  - O médico pode buscar pacientes **pelo nome**.
  - O médico pode vincular um **prontuário** ao paciente.
  - O campo **Descrição do Prontuário** é o único que precisa ser preenchido **obrigatório**.
  _ O campo **Altura**, **Idade** e **Peso** só aceitam dígitos
  - O médico pode visualizar o **histórico de prontuários anteriores**, incluindo todos os detalhes preenchidos e o médico que realizou o atendimento.
- **Receita Médica**:
  - Todos os campos são obrigatórios:
    - Nome do médico (preenchido automaticamente)
    - CRM do médico (preenchido automaticamente)
    - Nome do paciente (**apenas letras**)
    - Data
    - Descrição da receita
  - O **nome do médico e CRM não podem ser alterados**, pois são preenchidos automaticamente, conforme o cadastro fornecido do médico logado no sistema.
  - O médico tem a possibilidade de **imprimir** a receita.

#### Restrições de Prontuário
- Somente médicos ou autorizados podem acessar ou editar um prontuário.
- Prontuários arquivados devem ser armazenados de forma segura.

### **Tela do Administrador**
- **Alteração de Senha**:
  - Precisa preencher os dois campos de nova senha e confirmação.
  - Os campos devem ser comparados em tempo real e precisam **iguais**, caso não seja um alerta deve ser exibido.
- **Lista de Médicos**:
  - Permite **editar e excluir médicos**.
  - Permite **filtrar médicos por especialidade**.
- **Lista de Pacientes**:
  - Permite **editar e excluir pacientes**.
  - Permite **filtrar pacientes por plano de saúde**.
- **Lista de Planos de Saúde**:
  - Permite **editar e excluir planos**.
  - Permite **filtrar planos por nome**.
- **Cadastro** 
  - Campos: nome, especialidade e plano, **só aceitam letras**.
  - Campos: CPF, telefone, data de nascimento, número do contrato, vencimento do contráto e CNPJ, **só aceitam dígitos**.
  - Campos de e-mail só aceitam o formato com o **@texto**.
- **Dashboard**:
  - Permite visualizar **graficamente**:
    - Planos de Saúde por Paciente.
    - Médicos por Especialidade.

#### Restrições de Cadastro
- O sistema deve permitir a criação de 3 tipos de perfil: médico, paciente e administrador.
- O sistema deve ter diferentes funcionalidades dependendo do tipo de perfil logado.
- Cada usuário deve ter cadastro único, identificado pelo CPF, incluindo informações obrigatórias e opcionais.

## 2. Regras de Derivação
- Se um paciente realizar um agendamento, então ele deve receber uma notificação de integração com o google agenda.
- Se um paciente tem uma consulta agendada, então ele deve receber um lembrete 24 horas e 2 horas antes.
- Se um paciente cadastrar um medicamento, então ele deve receber um lembrete 10 minutos antes do horário programado.

### Lembretes de Consulta
- Somente o paciente pode confirmar o agendamento por meio do lembrete.

## 4. Regras de Cálculo
- O sistema calcula automaticamente o horário de envio de lembretes, tanto de confirmação quanto de medicamentos.


## 5. Regras de Causa e Efeito
- Se um paciente cancela uma consulta, então o horário deve ser liberado para novo agendamento.

## 6. Regras de Diretriz

### Cadastro Incompleto
- Se o cadastro do paciente, médico ou do plano não tiver todos os campos obrigatórios preenchidos, o sistema exibirá um aviso e não permitirá o cadastro.

## 7. Regras de Segurança e Privacidade
- O sistema deve criptografar os dados dos pacientes, como prontuários e dados pessoais.
- Apenas usuários identificados possuem acesso ao sistema, via login e senha.

## 8. Regras de Restrição de Estrutura
- Um paciente não pode ter mais de uma consulta agendada com médicos diferentes no mesmo dia e horário.
- Um médico não pode ter mais de uma consulta vinculada a ele no mesmo dia e horário, simultaneamente.
- Um administrador não pode agendar consultas fora do expediente da clínica.
- Um administrador não pode agendar consultas no passado.

