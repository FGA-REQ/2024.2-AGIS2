import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate(); // Criar a função de navegação

  const handleButtonClick = () => {
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo-container">
          <h1>Bem-vindo ao MedManager</h1>
          <img src="logo.svg" alt="MedMannager Logo" className="home-logo" />
        </div>
        <p>Gerencie suas tarefas médicas e acadêmicas de forma simples e eficiente.</p>
        <button className="cta-button" onClick={handleButtonClick}>Comece Agora</button>
      </header>

      <section className="about-section">
        <h2>Sobre Nós</h2>
        <p>
          O MedManager é uma plataforma inovadora desenvolvida para atender às
          necessidades de profissionais da saúde e da gestão acadêmica,
          oferecendo ferramentas modernas para facilitar a organização e o gerenciamento. Nossa missão é simplificar o trabalho de médicos, estudantes e outros
          profissionais, permitindo que eles se concentrem no que realmente importa.
        </p>
      </section>

      <section className="features-section">
        <h2>Principais Funcionalidades</h2>
        <div className="features">
          <div className="feature-item">
            <h3>Gestão de Agendamento</h3>
            <p>Faça agendamentos de forma simples e prática.</p>
          </div>
          <div className="feature-item">
            <h3>Organização</h3>
            <p>Acesse informações centralizadas para otimizar o seu tempo.</p>
          </div>
          <div className="feature-item">
            <h3>Agilidade</h3>
            <p>Acesse seus dados rapidamente com poucos cliques.</p>
          </div>
          <div className="feature-item">
            <h3>Confiança</h3>
            <p>Segurança e precisão nos seus registros.</p>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <h2>Recursos Extras</h2>
        <div className="resources-list">
          <div className="resource-item">
            <img src="agenda.svg" alt="Ícone Google Agenda" className="img-resorce-item" />
            <h3>Integração com Google Agenda</h3>
          </div>
          <div className="resource-item">
            <img src="lembrete.svg" alt="Ícone Lembretes de Medicamentos" className="img-resorce-item" />
            <h3>Lembretes de Medicamentos</h3>
          </div>
          <div className="resource-item">
            <img src="grafico.svg" alt="Ícone Dashboards Personalizáveis" className="img-resorce-item" />
            <h3>Dashboards Personalizáveis</h3>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-logo-container">
          <img src="logo.svg" alt="MedMannager Logo" className="footer-logo" />
          <div className="footer-contact">
            <p>Telefone: (61) 1234-5678</p>
            <p>WhatsApp: (61) 98765-4321</p>
            <p>Email: medmanager@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
