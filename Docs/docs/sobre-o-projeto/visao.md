---
sidebar_position: 1
---

# Visão do produto e projeto

Documento utilizado como guia para o registro das informações gerais do projeto, realizado na matéria de Requisitos 2024.2. O qual será atualizado, por meio de versões, ao longo do ciclo de vida do desenvolvimento do produto.

## **1. VISÃO GERAL DO PRODUTO**

### **1.1. Problema**

A clínica a qual este documento tem como objetivo solucionar algumas de suas dores relatou que devido à grande duração de seus procedimentos e à necessidade de constante acompanhamento de seus pacientes, aliada à alta demanda pelos seus serviços, não consegue reter os seus clientes – isto é, fidelizá-los e prevenir a evasão ao tratamento.

Ao destrinchar essa dor foi possível chegar às suas causas e, consequentemente, estabelecer uma possível solução. Tais causas são:
- A clínica manteve os seus processos de funcionamento inalterados desde a sua fundação, não conseguindo acompanhar a crescente demanda.
- Os processos são realizados por uma equipe limitada que utiliza ferramentas inadequadas e que não oferecem a percepção necessária para que uma tarefa repetitiva e com um protocolo bem definido, como o atendimento ao paciente, seja realizada de maneira ágil.

Ademais, é importante ressaltar que, apesar dos serviços prestados pela clínica serem uma via de mão dupla entre clínica e paciente, exigindo que os mesmos realizem o uso regular do que foi receitado e compareçam com frequência para acompanhamentos de rotina, cabe à clínica se diferenciar, fazendo o possível para facilitar que o papel dos seus contratantes seja cumprido. Tal facilitação não ocorre, o que caracteriza o desperdício de um potencial diferencial para a empresa.

Uma possível solução identificada é um Sistema de Gestão para Consultórios Médicos - uma plataforma que ajuda a gerenciar agendamentos, prontuários eletrônicos e a comunicação com pacientes via mensagens automáticas para confirmação de consultas e lembretes de remédios. Requisitos podem incluir a proteção de dados médicos e lembretes em tempo real.

Nosso software simplificará o gerenciamento de operações diárias de consultórios com foco na redução da evasão de pacientes durante seu tratamento médico. Ele também busca manter os pacientes engajados e motivados ao longo do processo, garantindo uma experiência beneficente para ambos os lados (cliente e clínica).

**Figura 01:** Diagrama de Ishikawa do projeto MedManager usado como forma para identificar possíveis causas para o problema identificado.

---

## **2. DECLARAÇÃO DE POSIÇÃO DO PRODUTO**

1. **Qual é o produto que você se propõe a desenvolver?**
   - Nosso produto é um sistema de gestão de clientes para clínicas médicas e odontológicas.

2. **O que torna este produto diferente dos seus concorrentes?**
   - Ele se diferencia dos concorrentes por oferecer uma interface intuitiva, integrada com agendamentos, prontuários eletrônicos, comunicação direta com pacientes e ferramentas avançadas de gestão financeira, garantindo eficiência e praticidade.

3. **Quem são os usuários-alvo e clientes do produto?**
   - Os usuários-alvo são administradores, médicos, dentistas e equipes de suporte das clínicas, além dos próprios pacientes que poderão acessar funcionalidades específicas.

4. **Por que os clientes deveriam utilizar / comprar este produto?**
   - Os clientes devem utilizar este produto porque ele simplifica processos operacionais, melhora a experiência do paciente e otimiza o fluxo de trabalho, resultando em maior produtividade e qualidade no atendimento.

A gestão eficiente de consultórios médicos é essencial para garantir a qualidade do atendimento e a satisfação dos pacientes, mas muitos profissionais enfrentam desafios para atender às necessidades específicas. Essas dificuldades acabam gerando processos demorados e dificuldades na comunicação com os pacientes, especialmente em relação ao envio de lembretes.

Com o objetivo de resolver essas questões, o MedManager foi desenvolvido como uma plataforma web integrada e exclusiva para consultórios médicos. Este produto oferece um conjunto de funcionalidades para otimizar a gestão, como a organização de agendamentos, o acesso a prontuários e a comunicação direta com os pacientes por meio de lembretes. Um de seus diferenciais é a integração com o WhatsApp, permitindo o envio automático de lembretes personalizados, integrados também com o calendário pessoal do paciente, melhorando significativamente a experiência tanto do médico quanto do paciente.

**Tabela 1:** Framework de detalhamento do problema.

| **Para** | Médicos que possuem consultórios e desejam otimizar a gestão de suas atividades. |
|----------|---------------------------------------------------------------------------|
| **Quem** | Enfrentam dificuldades com sistemas genéricos ou com planilhas manuais que não atendem às necessidades específicas de consultórios médicos. Além disso, dificuldades na comunicação com os participantes em lembrá-los da data e hora da consulta. |
| **O produto** | O MedManager é uma plataforma web integrada para consultórios médicos. |
| **Que** | Permite organizar agendamentos, acessar prontuários eletrônicos e comunicar-se diretamente com os pacientes, por meio de lembretes enviados pelo WhatsApp. |
| **Ao contrário** | Sistemas de gestão genéricos e ineficientes e uso de planilhas manuais. |
| **Nosso produto** | Oferece uma solução específica para o contexto de consultório, com funcionalidades aplicadas, interface intuitiva e lembretes enviados pelo WhatsApp integrado com o calendário. |

---

## **3. OBJETIVOS DO PRODUTO**

O objetivo principal do produto é criar uma plataforma web integrada e específica para ambientes com consultas, que facilite a gestão de agendamentos, prontuários eletrônicos e a comunicação com os pacientes, por meio de lembretes integrados com o calendário.

Além disso, facilita a gestão de agendamentos, a segurança e a proteção de dados (conformidade com as regulamentações de proteção de dados, como a Lei Geral de Proteção de Dados - LGPD), garantindo que todas as informações sejam armazenadas e manipuladas de maneira segura e ética.

---

## **4. TECNOLOGIAS A SEREM UTILIZADAS**

As tecnologias devem ser selecionadas com base em suas funcionalidades específicas, garantindo uma experiência otimizada e assegurando que a plataforma seja intuitiva e eficiente. Abaixo estão as principais ferramentas escolhidas para o desenvolvimento do sistema:

- **Banco de Dados:** PostgreSQL
- **Front-end:** React, JavaScript
- **Back-end:** NestJS, TypeScript
- **Integração:** Axios
- **Ambiente** Docker