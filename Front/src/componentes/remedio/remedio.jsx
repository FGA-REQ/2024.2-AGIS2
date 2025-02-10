import React, { useState, useEffect } from "react";
import * as api from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./remedio.css";

function Remedio() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editarId, setEditarId] = useState(null);

  const remedio = location.state?.remedio;

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   async function carregarRemedios() {
  //     try {
  //       const { data } = await api.buscarRemedio();
  //       setRemedios(data);
  //     } catch (error) {
  //       alert("Erro ao carregar os remédios!");
  //     }
  //   }
  //   carregarRemedios();
  // }, []);

  const enviarRemedio = async (dados) => {
    try {
      const dadosValidos = Object.fromEntries(
        Object.entries(dados).filter(
          ([key, value]) => value !== "" && value !== null && value !== undefined,
        ),
      );

      console.log(dados);

      if (remedio) {
        await api.editarRemedio(editarId, dadosValidos);
      } else {
        console.log(dadosValidos);
        await api.cadastroRemedio(dadosValidos);
      }

    } catch (error) {
      console.error("Erro ao cadastrar remédio: ", error);
      alert("Erro", error);
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

      <form className="form-cadastro" onSubmit={handleSubmit(enviarRemedio)}>
        <div className="campo">
          <label>Nome do Remédio</label>
          <input
            type="text"
            {...register("name", { required: true })}
          />
        </div>

        <div className="campo">
          <label>Local de Ação</label>
          <input
            type="text"
            {...register("actionSite", { required: true })}
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

export default Remedio;
