import React, { useState } from "react";
import './App.css';
import ModalLogin from './modals/ModalLogin'; 
import { FaWhatsapp } from 'react-icons/fa';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./assets/logo.png")} alt="Magic Quest Logo" className="logo" />
        <h1>Magic Quest</h1>
        <button className="login-button" onClick={openModal}>Iniciar Sesión</button>
      </header>

      {/* Modal de Iniciar sesión */}
      <ModalLogin isOpen={isModalOpen} onClose={closeModal} />

      <section className="mission-vision">
        <h2>Misión</h2>
        <p>Proveer las mejores cartas coleccionables para todos nuestros clientes.</p>
        <h2>Visión</h2>
        <p>Ser la tienda de referencia para coleccionistas y jugadores de cartas.</p>
      </section>

      <section className="brands">
        <h2>Marcas Asociadas</h2>
        <div className="brand-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/2560px-Magicthegathering-logo.svg.png" alt="Magic" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg" alt="Yu Gi Oh" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pokémon_Trading_Card_Game_logo.svg/1200px-Pokémon_Trading_Card_Game_logo.svg.png" alt="Pokemon" />
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Magic Quest</p>
      </footer>

      <a
      href="https://wa.me/+50251206885"
      className="whatsapp-button"
      target="Magic Quest"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={50} color="green" />
    </a>
    </div>
  );
}

export default App;
