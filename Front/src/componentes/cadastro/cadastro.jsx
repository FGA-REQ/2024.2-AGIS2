import './cadastro.css';
import React, { useState, useEffect } from "react";
import * as api from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

function Cadastro({ medicoEditado, pacienteEditado, planoEditado, onSalvarMedico, onSalvarPaciente, onSalvarPlano }) {
  const [selected, setSelected] = useState("");
  const location = useLocation();
  const navegar = useNavigate();
  const medico = location.state?.medico;
  const paciente = location.state?.paciente;
  const plano = location.state?.plano;

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (medico) {
      reset({
        email: medico.email,
        name: medico.name,
        telephone: medico.telephone,
        birthday: medico.birthday
          ? new Date(medico.birthday).toISOString().split("T")[0]
          : "",
        CRM: medico.CRM,
        specialty: medico.specialty,
        password: medico.password,
        CPF: medico.CPF,
      });
    } else {
      reset({
        email: "",
        name: "",
        telephone: "",
        birthday: "",
        CRM: "",
        specialty: "",
        password: "",
        CPF: "",
      });
    }

    if (paciente) {
      reset({
        name: paciente.name,
        email: paciente.email,
        birthday: paciente.birthday
          ? new Date(paciente.birthday).toISOString().split("T")[0]
          : "",
        CPF: paciente.CPF,
        telephone: paciente.telephone,
        password: paciente.password,
      });
    } else {
      reset({
        email: "",
        name: "",
        telephone: "",
        birthday: "",
        CRM: "",
        specialty: "",
        password: "",
        CPF: "",
      });
    }

    reset();
  }, [selected, medico, paciente, reset]);

  const converterData = (datinha) => {
    const [day, month, year] = datinha.split('/');
    return new Date(`${year}-${month}-${day}`).toISOString();
  }

  const aoEnviarMedico = async (dados) => {
    try {
      if (dados.birthday) {
        dados.birthday = converterData(dados.birthday);
      }

      const dadosValidos = Object.fromEntries(
        Object.entries(dados).filter(
          ([key, value]) => value !== "" && value !== null && value !== undefined,
        ),
      );

      if (medico) {
        await api.editarDoutor(dadosValidos);
        
      } else {
        await api.cadastroDoutor(dadosValidos);
        console.log("cadastrou");
      }
      setTimeout(() => {
        navegar("/admin");
      }, 1250);

    } catch (error) {
      console.error("Erro ao cadastrar ou editar:", error);
    }
    
  };

  const aoEnviarPaciente = async (dados) => {
    try {
      if (dados.birthday) {
        dados.birthday = converterData(dados.birthday);
      }

      const dadosValidos = Object.fromEntries(
        Object.entries(dados).filter(
          ([key, value]) => value !== "" && value !== null && value !== undefined,
        ),
      );

      if (paciente) {
        await api.editarPaciente(dadosValidos);
      } else {
        await api.cadastroPaciente(dadosValidos);
      }
      setTimeout(() => {
        navegar("/admin");
      }, 1250);
    } catch (error) {
      console.error("Erro ao cadastrar ou editar:", error);
    }
  };

  const aoEnviarPlano = async (dados) => {
    try {
      if (dados.birthday) {
        dados.birthday = converterData(dados.birthday);
      }

      const dadosValidos = Object.fromEntries(
        Object.entries(dados).filter(
          ([key, value]) => value !== "" && value !== null && value !== undefined,
        ),
      );

      if (plano) {
        await api.editarPlano(dadosValidos);
      } else {
        await api.cadastroPlano(dadosValidos);
      }

      setTimeout(() => {
        navegar("/admin");
      }, 1250);
    } catch (error) {
      console.error("Erro ao cadastrar ou editar:", error);
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

      <form className="forms-cadastro" onSubmit={handleSubmit(selected === "Médico" ? aoEnviarMedico : selected === "Paciente" ? aoEnviarPaciente : aoEnviarPlano)}>
        {selected === "Médico" && (
          <div className="apertou-medico">

            <span className="required">*campo obrigatório</span>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite o nome do médico"
              {...register("name", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite o email do médico"
              {...register("email", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Digite o CPF do médico"
              {...register("CPF", { required: true })}
              maxLength="14"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

                // Aplica a formatação correta de CPF (XXX.XXX.XXX-XX)
                if (value.length > 9) {
                  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
                } else if (value.length > 6) {
                  value = value.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
                } else if (value.length > 3) {
                  value = value.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
                }

                setValue("CPF", value, { shouldValidate: true });
              }}
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone do médico"
              {...register("telephone", { required: true })}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                setValue("telephone", value);
              }}
              maxLength="15"
            />

            <span className="required">*campo obrigatório</span>
            <label>Data de Nascimento</label>
            <input
              type="date"
              {...register("birthday", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>CRM</label>
            <input
              type="text"
              placeholder="Digite o CRM"
              {...register("CRM", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>Especialidade</label>
            <input
              type="text"
              placeholder="Digite a Especialidade"
              {...register("specialty", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>Senha</label>
            <input
              type="text"
              placeholder="Digite a nova senha do doutor"
              {...register("password", { required: true })}
            />

            <button type="submit" className="btn-salvar">
              Salvar
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
              {...register("name", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite o email do paciente"

              {...register("email", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Digite o CPF do paciente"
              {...register("CPF", { required: true })}
              maxLength="14"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

                // Aplica a formatação correta de CPF (XXX.XXX.XXX-XX)
                if (value.length > 9) {
                  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
                } else if (value.length > 6) {
                  value = value.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
                } else if (value.length > 3) {
                  value = value.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
                }

                setValue("CPF", value, { shouldValidate: true });
              }}
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone do paciente"
              {...register("telephone", { required: true })}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                setValue("telephone", value);
              }}
              maxLength="15"
            />

            <span className="required">*campo obrigatório</span>
            <label>Data de Nascimento</label>
            <input
              type="date"
              {...register("birthday", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>Senha</label>
            <input
              type="text"
              placeholder="Digite a nova senha do paciente"
              {...register("password", { required: true })}
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
              {...register("name", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>CPF do paciente</label>
            <input
              type="text"
              placeholder="Digite o CPF do paciente"
              {...register("patientCPF", { required: true })}
              maxLength="14"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

                // Aplica a formatação correta de CPF (XXX.XXX.XXX-XX)
                if (value.length > 9) {
                  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
                } else if (value.length > 6) {
                  value = value.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
                } else if (value.length > 3) {
                  value = value.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
                }
                setValue("patientCPF", value, { shouldValidate: true });
              }}
            />

            <span className="required">*campo obrigatório</span>
            <label>Número do Contrato</label>
            <input
              type="text"
              placeholder="Digite o número do contrato"
              {...register("contractNumber", { required: true })}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                setValue("contractNumber", value);
              }}
              maxLength={15}
            />

            <span className="required">*campo obrigatório</span>
            <label>Vencimento do Contrato</label>
            <input
              type="date"
              {...register("expirationDate", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>Empresa Responsável</label>
            <input
              type="text"
              placeholder="Digite o nome da empresa responsável"
              {...register("company", { required: true })}
            />

            <span className="required">*campo obrigatório</span>
            <label>CNPJ</label>
            <input
              type="text"
              placeholder="Digite o CNPJ"
              {...register("CNPJ", { required: true })}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/, "$1.$2"); // Formata os 2 primeiros números
                value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Formata os 3 próximos números
                value = value.replace(/(\d{3})(\d)/, "$1/$2"); // Formata os 3 próximos números com '/'
                value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2"); // Formata o final com '-'
                setValue("CNPJ", value);
              }}
              maxLength="18"
            />

            <span className="required">*campo obrigatório</span>
            <label>Telefone</label>
            <input
              type="tel"
              placeholder="Digite o telefone da empresa responsável"
              {...register("companyPhoneNumber", { required: true })}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
                value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                setValue("companyPhoneNumber", value);
              }}
              maxLength={15}
            />

            <span className="required">*campo obrigatório</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite o email da empresa responsável"
              {...register("companyEmail", { required: true })}
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