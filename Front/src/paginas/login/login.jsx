import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as api from "../../services/api";
import { jwtDecode } from "jwt-decode";
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [showForgotPassword, setPopEsqueceuSenha] = useState(false); // Controle do pop-up
  const [email, setEmail] = useState(""); // Controle do campo de e-mail do esqueci senha
  const [formData, setFormData] = useState({
    CPF: "",
    password: ""
  }); // Estado para armazenar dados do formulário

  const cliqueSeta = () => {
    navigate("/");
  };

  const lidarComMudancaNoInput = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const botaoLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(formData);
      const decoded = jwtDecode(response.data);

      // Lógica para determinar a rota com base na role
      if (decoded.role === "admin") {
        navigate("/admin");
      } else if (decoded.role === "patient") {
        navigate("/paciente");
      } else if (decoded.role === "doctor") {
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
        <div className="forgot-password-popup">
          <div className="popup-content">
            <h2>Recuperação de Senha</h2>
            <label>Digite seu e-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="popup-buttons">
              <button
                className="btn-enviar"
                onClick={enviarEmail}
              >
                Enviar
              </button>
              <button className="btn-cancelar" onClick={() => setPopEsqueceuSenha(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
