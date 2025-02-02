import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [showForgotPassword, setPopEsqueceuSenha] = useState(false); // Controle do pop-up
  const [email, setEmail] = useState(""); // Controle do campo de e-mail

  const cliqueSeta = () => {
    navigate("/");
  };

  const esqueceuSenha = () => {
    setPopEsqueceuSenha(true); // Abre o pop-up
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const enviarEmail = () => {
    if (email.trim() === "") {
      alert("Por favor, digite seu e-mail.");
      return;
    }

    if (!validarEmail(email)) {
      alert("Por favor, digite um e-mail válido.");
      return;
    }

    alert(`E-mail de recuperação enviado para: ${email}`);
    setPopEsqueceuSenha(false);
    setEmail("");
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

        <form className="forms-login">
          <span className="required">*campo obrigatório</span>

          <label>Usuário</label>
          <input type="text" placeholder="Digite o CPF" required />

          <span className="required">*campo obrigatório</span>

          <label>Senha</label>
          <input type="password" placeholder="Digite a senha" required />

          <button type="submit" className="btn-entrar">Entrar</button>
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