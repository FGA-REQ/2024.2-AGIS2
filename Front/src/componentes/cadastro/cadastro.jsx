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

  // Estado para o pop-up
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
      setModalMessage("Médico salvo com sucesso!" + nome + email + cpf + telefone + dataNascimento + crm + especialidade);
    } else if (selected === "Paciente") {
      if (onSalvarPaciente) {
        onSalvarPaciente({ nome, email, cpf, telefone, dataNascimento, planoDeSaude });
      }
      setModalMessage("Paciente salvo com sucesso!" + nome + email + cpf + telefone + dataNascimento + planoDeSaude);
    } else if (selected === "Plano") {
      if (onSalvarPlano) {
        onSalvarPlano({ nome, numeroContrato, vencimentoContrato, empresaResponsavel, cnpj, telefoneEmpresa, emailEmpresa });
      }
      setModalMessage("Plano salvo com sucesso!" + nome + numeroContrato + vencimentoContrato + empresaResponsavel + cnpj + telefoneEmpresa + emailEmpresa);
    }
    setShowModal(true);  // Show modal
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

  const handleModalClose = () => {
    setShowModal(false);  // Close modal
    if (onVoltarParaLista) {
      onVoltarParaLista();  // Redirect to the list page (e.g., médicos list)
    }
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
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="text"
              placeholder="Digite o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Digite o CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
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
              onChange={(e) => setCrm(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Especialidade</label>
            <input
              type="text"
              placeholder="Digite a Especialidade"
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
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
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="text"
              placeholder="Digite o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Digite o CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
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
              placeholder="Digite o plano"
              value={planoDeSaude}
              onChange={(e) => setPlano(e.target.value)}
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
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <span className="required">*campo obrigatório</span>
            <label>Número do Contrato</label>
            <input
              type="text"
              placeholder="Digite o número do contrato"
              value={numeroContrato}
              onChange={(e) => setNumeroContrato(e.target.value)}
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
              placeholder="Digite a empresa responsável"
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
              onChange={(e) => setCnpj(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone da Empresa</label>
            <input
              type="tel"
              placeholder="Digite o telefone da empresa"
              value={telefoneEmpresa}
              onChange={(e) => setTelefoneEmpresa(e.target.value)}
              required
            />

            <span className="required">*campo obrigatório</span>
            <label>Email da Empresa</label>
            <input
              type="text"
              placeholder="Digite o email da empresa"
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

      {/* Modal de confirmação */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modalMessage}</h2>
            <button className='btn-modal' onClick={handleModalClose}>Fechar</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Cadastro;
