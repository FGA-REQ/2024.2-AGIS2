import React, { useState } from "react";
import * as api from "../../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import "./alterarSenha.css";

function AlterarSenha() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // Pegando o e-mail passado da tela anterior

  const [formData, setFormData] = useState({  
    newPassword: "",
    confirmNewPassword: "",
    token: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await api.redefinirSenha({
        email, // Passando o e-mail correto
        token: formData.token,
        newPassword: formData.newPassword,
      });

      alert(response.data.message || "Senha alterada com sucesso!");
      navigate("/login"); // Redireciona para login após sucesso
    } catch (error) {
      console.error("Erro ao alterar senha:", error);
      alert(error.response?.data?.message || "Erro ao alterar senha.");
    }
  };

  return (
    <div className="change-password">
      <h2>Alterar Senha</h2>
      <form onSubmit={handleSubmit}>
        <label>Token</label>
        <input
          type="text"
          name="token"
          placeholder="Digite o token"
          value={formData.token}
          onChange={handleChange}
          required
        />

        <label>Nova Senha</label>
        <input
          type="password"
          name="newPassword"
          placeholder="Digite a nova senha"
          value={formData.newPassword}
          onChange={handleChange}
          required
        />

        <label>Confirme a Nova Senha</label>
        <input
          type="password"
          name="confirmNewPassword"
          placeholder="Confirme a nova senha"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-alterar">
          Alterar Senha
        </button>
      </form>
    </div>
  );
}

export default AlterarSenha;
