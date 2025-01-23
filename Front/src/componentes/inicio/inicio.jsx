

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./inicio.css";
// import { editPassword } from "../../queries/user";
// import axios from "axios";
// import { baseURL } from '../../config/baseurl';

function Inicio() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [senhaMatch, setSenhaMatch] = useState(true);
  const [userId, setUserId] = useState("");
//   const [admin, setAdmin] = useState(false);
//   const navigate = useNavigate();

//   // Define o título da página e recupera os dados do usuário ao montar o componente

//   useEffect(() => {
//     document.title = 'Detalhe';
//     try {
//       var cookieValue = document.cookie
//         .split(";")
//         .map((cookie) => cookie.split("="))
//         .reduce(
//           (accumulator, [key, value]) => ({
//             ...accumulator,
//             [key.trim()]: decodeURIComponent(value),
//           }),
//           {}
//         );
//       let token = cookieValue.jwtToken.toString();
//       axios
//         .post(baseURL+"users/token", {
//           token: token,
//         })
//         .then(function (response) {
//           if (!(response.data < 0)) {
//             setUsuario(response.data.nome);
//             setNome(response.data.nome);
//             setEmail(response.data.email);
//             setMatricula(response.data.matricula);
//             setUserId(response.data.id);
//             axios.get(baseURL+"users/" + response.data.id).then(function (resposta) {
//               if (resposta.data.acesso.acesso_admin) {
//                 const estiloBotao = {
//                   opacity: 1.0, // Define a opacidade desejada aqui
//                 };
//                 setAdmin(resposta.data.acesso.acesso_admin);
//               } else {
//                 const estiloBotao = {
//                   opacity: 0.0, // Define a opacidade desejada aqui
//                 };
//               }
//             });
//           } else {
//             navigate("/login");
//           }
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//     } catch (err) {
//       navigate("/login");
//     }
//   }, []);

  // Função para exibir o popup de alteração de senha

  const handleAlterarSenha = () => {
    setMostrarPopup(true);
  };

  // Função para fechar o popup de alteração de senha

  const fecharPopup = () => {
    setNovaSenha("");
    setConfirmarSenha("");
    setMostrarPopup(false);
    setSenhaMatch(true); // Reinicia o estado para que a mensagem de erro desapareça quando o popup for fechado
  };

  // Função para alterar a senha do usuário chamando a API

  const alterarSenha = async (userId, newData) => {
    try {
      await editPassword(userId, newData);
      alert("Senha alterada com sucesso!");
      fecharPopup();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  // Manipula o envio do formulário de alteração de senha

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verifica se as senhas são iguais
    if (novaSenha === confirmarSenha) {
      // Lógica para enviar a nova senha ao backend e fechar o popup
      try {
        await editPassword(userId, {
          senha: novaSenha
        });
        setNovaSenha("");
        setConfirmarSenha("");
        setMostrarPopup(false);
        setSenhaMatch(true); // Reinicia o estado para que a mensagem de erro desapareça*/
      } catch (error) {
        alert("Erro ao editar a senha!");
      }
    } else {
      setSenhaMatch(false); // Exibe mensagem de erro
    }
  };

//   // Função para redirecionar para a página de administração se o usuário for admin

//   const AdminTela = () => {
//     //console.log(admin);
//     if (admin) {
//       navigate("/Admin"); // Redireciona para pag Admin
//     }
//   };

  return (
    <>
      <section className="inicio">
        <img className="logo-inicio" src="/logo.svg" alt="logo" />

        <div className="header-inicio">
        <p>Olá {nome}!</p>
        <p> E-mail: {email} </p>
        </div>

        <div className="alterar-senha-inicio">
          <button onClick={handleAlterarSenha}>Alterar senha</button>
          {mostrarPopup && (
            <div className="popupContainer">
              <div className="alterarSenhaPopup">
                <span className="fecharPopup" onClick={fecharPopup}>
                  &times;
                </span>
                <h2>Alterar Senha</h2>
                <form onSubmit={handleSubmit}>
                  <label>Nova Senha:</label>
                  <input
                    type="password"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                  />
                  <label>Confirmar Senha:</label>
                  <input
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                  />
                  {!senhaMatch && (
                    <p className="erroSenha">As senhas não coincidem.</p>
                  )}
                  <button type="submit">Salvar</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Inicio