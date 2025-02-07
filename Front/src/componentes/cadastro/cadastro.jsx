import './cadastro.css';
import React, { useState, useEffect } from "react";

function Cadastro({ medicoEditado, pacienteEditado, planoEditado, onSalvarMedico, onSalvarPaciente, onSalvarPlano }) {
  const [selected, setSelected] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [crm, setCrm] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [planoDeSaude, setPlano] = useState("");
  const [numeroContrato, setNumeroContrato] = useState("");
  const [vencimentoContrato, setVencimentoContrato] = useState("");
  const [empresaResponsavel, setEmpresaResponsavel] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefoneEmpresa, setTelefoneEmpresa] = useState("");
  const [emailEmpresa, setEmailEmpresa] = useState("");

  useEffect(() => {
    if (medicoEditado) {
      setSelected("Médico");
      setNome(medicoEditado.nome || "");
      setEspecialidade(medicoEditado.especialidade || "");
      setCrm(medicoEditado.crm || "");
      resetPlano();
    } else if (pacienteEditado) {
      setSelected("Paciente");
      setNome(pacienteEditado.nome || "");
      setPlano(pacienteEditado.planoDeSaude || "");
      resetPlano();
    } else if (planoEditado) {
      setSelected("Plano");
      setNome(planoEditado.nome || "");
      setNumeroContrato(planoEditado.numeroContrato || "");
      setVencimentoContrato(planoEditado.vencimentoContrato || "");
      setEmpresaResponsavel(planoEditado.empresaResponsavel || "");
      setCnpj(planoEditado.cnpj || "");
      setTelefoneEmpresa(planoEditado.telefoneEmpresa || "");
      setEmailEmpresa(planoEditado.emailEmpresa || "");
      resetPacienteMedico();
    }
  }, [medicoEditado, pacienteEditado, planoEditado]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selected === "Médico") {
      if (onSalvarMedico) {
        onSalvarMedico({ nome, email, cpf, telefone, dataNascimento, crm, especialidade });
      }
      alert("Médico salvo com sucesso!");
    } else if (selected === "Paciente") {
      if (onSalvarPaciente) {
        onSalvarPaciente({ nome, email, cpf, telefone, dataNascimento, planoDeSaude });
      }
      alert("Paciente salvo com sucesso!");
    } else if (selected === "Plano") {
      if (onSalvarPlano) {
        onSalvarPlano({ nome, numeroContrato, vencimentoContrato, empresaResponsavel, cnpj, telefoneEmpresa, emailEmpresa });
      }
      alert("Plano de Saúde salvo com sucesso!");
    }

    resetForm();
  };


  const resetForm = () => {
    setNome("");
    setEmail("");
    setCpf("");
    setTelefone("");
    setDataNascimento("");
    setCrm("");
    setEspecialidade("");
    setPlano("");
    resetPlano();
  };

  const resetPlano = () => {
    setNumeroContrato("");
    setVencimentoContrato("");
    setEmpresaResponsavel("");
    setCnpj("");
    setTelefoneEmpresa("");
    setEmailEmpresa("");
  };

  const resetPacienteMedico = () => {
    setPlano("");
    setEspecialidade("");
    setCrm("");
  };

  return (
    <div className="cadastro">
      <div className="header-cadastro">
        <h1>{medicoEditado || pacienteEditado || planoEditado ? `Editando ${selected}` : `Cadastro de ${selected}`}</h1>
      </div>
      {!medicoEditado && !pacienteEditado && !planoEditado && (
        <div className="botao-medico-paciente">
          <button
            className={`btn-medico-paciente ${selected === "Médico" ? "active" : ""}`}
            onClick={() => setSelected("Médico")}
          >
            Médico
          </button>
          <button
            className={`btn-medico-paciente ${selected === "Paciente" ? "active" : ""}`}
            onClick={() => setSelected("Paciente")}
          >
            Paciente
          </button>
          <button
            className={`btn-medico-paciente ${selected === "Plano" ? "active" : ""}`}
            onClick={() => setSelected("Plano")}
          >
            Plano de Saúde
          </button>
        </div>
      )}


      <form className="forms-cadastro" onSubmit={handleSubmit}>



        {selected === "Médico" && (
          <div className="apertou-medico">
            <span className="required">*campo obrigatório</span>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome do médico"
              value={nome}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
                setNome(value);
              }}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite o email do médico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Digite o CPF do médico"
              value={cpf}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/(\d{3})(\d)/, "$1.$2");
                value = value.replace(/(\d{3})(\d)/, "$1.$2");
                value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                setCpf(value);
              }}
              maxLength="14"
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone do médico"
              value={telefone}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                setTelefone(value);
              }}
              maxLength="15"
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Data de Nascimento</label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>CRM</label>
            <input
              type="text"
              placeholder="Digite o CRM"
              value={crm}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Permite apenas números
                setCrm(value);
              }}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Especialidade</label>
            <input
              type="text"
              placeholder="Digite a Especialidade"
              value={especialidade}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
                setEspecialidade(value);
              }}
              required
            />

            <button type="submit" className="btn-salvar">
              {medicoEditado || pacienteEditado || planoEditado ? "Editar" : "Salvar"}
            </button>
          </div>
        )}



        {selected === "Paciente" && (
          <div className="apertou-paciente">

            <span className="required">*campo obrigatório</span>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome do paciente"
              value={nome}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
                setNome(value);
              }}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite o email do paciente"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Digite o CPF do paciente"
              value={cpf}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/(\d{3})(\d)/, "$1.$2");
                value = value.replace(/(\d{3})(\d)/, "$1.$2");
                value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                setCpf(value);
              }}
              maxLength="14"
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone do paciente"
              value={telefone}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                setTelefone(value);
              }}
              maxLength="15"
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Data de Nascimento</label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Plano</label>
            <input
              type="text"
              placeholder="Digite o plano, caso não tenha, digite 'Particular'"
              value={planoDeSaude}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
                setPlano(value);
              }}
              required
            />

            <button type="submit" className="btn-salvar">
              {medicoEditado || pacienteEditado || planoEditado ? "Editar" : "Salvar"}
            </button>
          </div>
        )}



        {selected === "Plano" && (
          <div className="apertou-plano">
            <span className="required">*campo obrigatório</span>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome do plano de saúde"
              value={nome}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
                setNome(value);
              }}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Número do Contrato</label>
            <input
              type="text"
              placeholder="Digite o número do contrato"
              value={numeroContrato}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Apenas números
                setNumeroContrato(value);
              }}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Vencimento do Contrato</label>
            <input
              type="date"
              value={vencimentoContrato}
              onChange={(e) => setVencimentoContrato(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Empresa Responsável</label>
            <input
              type="text"
              placeholder="Digite o nome da empresa responsável"
              value={empresaResponsavel}
              onChange={(e) => setEmpresaResponsavel(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>CNPJ</label>
            <input
              type="text"
              placeholder="Digite o CNPJ"
              value={cnpj}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/, "$1.$2"); // Formata os 2 primeiros números
                value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Formata os 3 próximos números
                value = value.replace(/(\d{3})(\d)/, "$1/$2"); // Formata os 3 próximos números com '/'
                value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2"); // Formata o final com '-'
                setCnpj(value);
              }}
              maxLength="18"
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone da empresa responsável"
              value={telefoneEmpresa}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                setTelefoneEmpresa(value);
              }}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite o email da empresa responsável"
              value={emailEmpresa}
              onChange={(e) => setEmailEmpresa(e.target.value)}
              required
            />
            <button type="submit" className="btn-salvar">
              {medicoEditado || pacienteEditado || planoEditado ? "Editar" : "Salvar"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Cadastro;
