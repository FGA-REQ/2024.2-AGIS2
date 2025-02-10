import React, { useContext, useState } from "react";
import { data, useNavigate } from 'react-router-dom';
import * as api from "../../services/api";
import { jwtDecode } from "jwt-decode";
import './login.css';
import { UsuarioContext } from "../../context/context";

function Login() {
  const navigate = useNavigate();
  const [showForgotPassword, setPopEsqueceuSenha] = useState(false); // Controle do pop-up
  const [email, setEmail] = useState(""); // Controle do campo de e-mail do esqueci senha
  const [formData, setFormData] = useState({
    CPF: "",
    password: ""
  }); // Estado para armazenar dados do formulário


  const [formDataEsqueceu, setFormDataEsqueceu] = useState({
    email: ""
  }); // Estado para armazenar dados do formulário
  const { emailUsuario, CRM, CPF, nome, setCRM, setNome, setEmailUsuario, setCPF } = useContext(UsuarioContext)


  const cliqueSeta = () => {
    navigate("/");
  };

  const lidarComMudancaNoInput = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    setFormDataEsqueceu({ ...formDataEsqueceu, [target.name]: target.value });
  };

  const botaoLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(formData);
      const token = response.data.token;
      localStorage.setItem("token", token);

      setEmailUsuario(response.data.response.email);
      setCPF(response.data.response.CPF);
      setNome(response.data.response.name);

      const decoded = jwtDecode(response.data.token);
      if (decoded.roles.includes("doctor")) setCRM(response.data.response.CRM);

      // Lógica para determinar a rota com base na role
      if (decoded.roles.includes("admin")) {
        navigate("/admin");
      } else if (decoded.roles.includes("patient")) {
        navigate("/paciente");
      } else if (decoded.roles.includes("doctor")) {
        navigate("/medico");
      } else {
        alert("Role desconhecida");
      }

    } catch (error) {
      console.error("Erro ao fazer login", error);
      alert("Erro ao fazer login. Verifique seu CPF ou senha!!");
    }
  };

  const esqueceuSenha = () => {
    setPopEsqueceuSenha(true);
  };

  const botaoEsqueceuSenha = async (e) => {
    e.preventDefault();
  
    if (!formDataEsqueceu.email) {
      alert("Por favor, insira seu e-mail.");
      return;
    }
  
    try {
      const response = await api.enviaToken(formDataEsqueceu);
      alert(response.data.message || "E-mail de recuperação enviado com sucesso!");
      
      // Redireciona para a tela de alteração de senha enviando o email no state
      navigate("/alterarSenha", { state: { email: formDataEsqueceu.email } });
  
    } catch (error) {
      console.error("Erro ao enviar e-mail de recuperação:", error);
      alert(error.response?.data?.message || "Erro ao enviar e-mail. Tente novamente.");
    }
  };
  


  const redefinirSenha = async () => {
    if (!email || !token || !novaSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.resetPassword(email, token, novaSenha);
      alert(response.message || "Senha redefinida com sucesso!");
      navigate("/alterarSenha"); // Redirecionar para o login após sucesso
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      alert(error.message || "Erro ao redefinir senha. Tente novamente.");
    }
  };

  const lidarComMudancaNoInputCPF = ({ target }) => {
    let { name, value } = target;

    if (name === "CPF") {
      value = value.replace(/\D/g, ""); // Remove tudo que não for número

      // Adiciona a formatação automática
      if (value.length <= 3) {
        value = value.replace(/(\d{3})(\d+)/, "$1");
      } else if (value.length <= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2");
      } else if (value.length <= 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
      } else {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
    }
    setFormData({ ...formData, [name]: value });

  };

  return (
    <div className='login'>
      <div className='container-login'>
        <div className='header-login'>
          <img
            className="seta-login"
            src="/seta.svg"
            alt="Seta para voltar pro home"
            onClick={cliqueSeta}
          />
          <h1>Login</h1>
          <img className="logo-login" src="/logo.svg" alt="Logo do Med Manager" />
        </div>
        <h2>Med Manager</h2>

        <form className="forms-login" onSubmit={botaoLogin} >

          <label>Usuário</label>
          <input
            type="text"
            placeholder="Digite o CPF"
            name="CPF"
            value={formData.CPF}
            onChange={(e) => lidarComMudancaNoInputCPF(e)}
            maxLength="11"
            required
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite a senha"
            name="password"
            value={formData.password}
            onChange={(e) => lidarComMudancaNoInput(e)}
            required
          />

          <button
            type="submit"
            className="btn-entrar">Entrar</button>
        </form>

        <p className="forgot-password" onClick={esqueceuSenha}>
          Esqueceu a senha?
        </p>
      </div>

      {/* Pop-up de esqueci a senha */}
      {showForgotPassword && (

        <form className="forms-esqueceu-senha" onSubmit={botaoEsqueceuSenha} >

          <div className="forgot-password-popup">
            <div className="popup-content">
              <h2>Recuperação de Senha</h2>
              <label>Digite seu e-mail:</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={formDataEsqueceu.email}
                onChange={(e) => setFormDataEsqueceu({ ...formDataEsqueceu, email: e.target.value })}
              />

              <div className="popup-buttons">
                <button
                  className="btn-enviar"
                  onClick={botaoEsqueceuSenha}
                >
                  Enviar
                </button>
                <button className="btn-cancelar" onClick={() => setPopEsqueceuSenha(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        </form>

      )}
    </div>
  );
}

export default Login;