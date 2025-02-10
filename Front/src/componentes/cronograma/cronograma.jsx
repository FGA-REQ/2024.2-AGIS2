import React, { useState, useEffect, useContext } from "react";
import * as api from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./cronograma.css";
import { UsuarioContext } from "../../context/context";

function Cronograma() {
  const [editarId, setEditarId] = useState(null);
  const [remedios, setRemedios] = useState([]);

  // const remedio = location.state?.remedio;
  const { CPF, setCPF } = useContext(UsuarioContext);

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
    async function carregarRemedios() {
      try {
        const { data } = await api.buscarRemedio();
        setRemedios(data);
      } catch (error) {
        alert("Erro ao carregar os remédios!");
      }
    }
    carregarRemedios();

  }, []);

  const enviarRemedio = async (e, dados) => {
    e.preventDefault();
    try {
      console.log(dados);
      
      const dadosValidos = Object.fromEntries(
        Object.entries(dados).filter(
          ([key, value]) => value !== "" && value !== null && value !== undefined,
        ),
      );

      console.log(dadosValidos);
      //await api.cadastroDrugSchedule(dadosValidos);
      console.log("aaaaa");


    } catch (error) {
      console.error("Erro ao cadastrar cronograma ", error);
      alert("Erro :D", error);
    }
  };

  // // 🔹 3️⃣ Deletar um remédio
  // const deletarRemedio = async (id) => {
  //   try {
  //     await api.excluirRemedio(id);
  //     setRemedios(remedios.filter((r) => r.id !== id));
  //   } catch (error) {
  //     alert("Erro ao deletar o remédio!");
  //   }
  // };

  // // 🔹 4️⃣ Editar um remédio existente
  // const editarRemedioClick = (remedio) => {
  //   setEditarId(remedio.id);
  //   setNome(remedio.name);
  //   setLocalDeAcao(remedio.actionSite);
  //   setMostrarFormulario(true);
  // };

  return (
    <div className="cadastro-remedio">
      <form className="form-cadastro" onSubmit={enviarRemedio}>
        <div className="campo">
          <label>Nome do Remédio</label>
          <select
            {...register("drugId", { required: true })}
          >
            <option value="">Selecione um remédio</option>
            {remedios.map((remedio) => (
              <option key={remedio.id} value={remedio.id}>
                {remedio.name}
              </option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label>CPF do paciente </label>
          <input
            type="text"
            value={CPF}
            readOnly
            {...register("patientCPF", { required: true })}
          />
        </div>

        <div className="campo">
          <label>Quantidade de Dias</label>
          <input
            type="number"
            min="1"
            {...register("numberOfDays", { required: true })}
          />
        </div>

        <div className="campo">
          <label>Intervalo entre Doses (horas)</label>
          <input
            type="number"
            min="1"
            {...register("drugBreak", { required: true })}
          />
        </div>

        <div className="campo">
          <label>Data inicial</label>
          <input
            type="date"
            {...register("initialDate", { required: true })}
          />
        </div>

        <button type="submit" className="btn-submit">{editarId ? "Atualizar" : "Cadastrar"}</button>
      </form>

      {/* Lista de Remédios */}
      {/* <div className="remedios-lista">
        {remedios.map((remedio) => (
          <div key={remedio.id} className="remedio-item">
            <div className="remedio-info">
              <span className='nome-remedio'><strong>{remedio.name}</strong></span>
              <span>Local: {remedio.actionSite}</span>
            </div>
            <div className="remedio-acoes">
              <img src="lapis.svg" alt="Editar" className="icon" onClick={() => editarRemedioClick(remedio)} />
              <img src="lixo.svg" alt="Deletar" className="icon" onClick={() => deletarRemedio(remedio.id)} />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Cronograma;
