import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [showForgotPassword, setPopEsqueceuSenha] = useState(false); // Controle do pop-up

  const [email, setEmail] = useState(""); // Controle do campo de e-mail do esqueci senha
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");


  const cliqueSeta = () => {
    navigate("/");
  };

  const botaoLogin = () => {
    const { login, senha } = formData;

    // Lógica para determinar a rota com base no login
    if (login === "admin") {
      navigate("/admin");
    } else if (login === "paciente") {
      navigate("/paciente");
    } else if (login === "medico") {
      navigate("/medico");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Printar os dados do formulário
    botaoLogin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const esqueceuSenha = () => {
    setPopEsqueceuSenha(true);
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarCpf = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Valida CPF no formato xxx.xxx.xxx-xx
    return regex.test(cpf);
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

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

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

    setCpf(value); // Atualiza o estado com o CPF formatado
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarCpf(cpf)) {
      alert("Por favor, digite um CPF válido com o formato xxx.xxx.xxx-xx.");
      return;
    }
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

        <form className="forms-login" onSubmit={handleSubmit}>

          <span className="required">*campo obrigatório</span>

          <label>Usuário (CPF)</label>
          <input
            type="text"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={handleCpfChange}
            maxLength="14"
            required
          />

          <span className="required">*campo obrigatório</span>

          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />


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
