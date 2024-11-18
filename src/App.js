import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ModalLogin from './modals/ModalLogin';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import MapLocation from './components/MapLocation';
import Productos from './components/Productos';
import HorariosJuego from './components/HorariosJuego';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={require("./assets/logo.png")} alt="Magic Quest Logo" className="logo" />
          <h1>Magic Quest</h1>

          {/* Solo mostrar el botón de Iniciar sesión en la versión de escritorio */}
          <button className="login-button" onClick={openModal} id="login-button-desktop">Iniciar Sesión</button>

          {/* Icono de menú hamburguesa para la versión móvil */}
          <button onClick={toggleMobileMenu} id="mobile-menu-toggle">
            ☰
          </button>
        </header>

        {/* Modal de Iniciar sesión */}
        <ModalLogin isOpen={isModalOpen} onClose={closeModal} />

        <Routes>
          <Route
            path="/"
            element={
              <section className="mission-vision">
                <h2>Misión</h2>
                <p>Proveer las mejores cartas coleccionables para todos nuestros clientes.</p>
                <h2>Visión</h2>
                <p>Ser la tienda de referencia para coleccionistas y jugadores de cartas.</p>
              </section>
            }
          />
          <Route path="/productos" element={<Productos />} />
        </Routes>

        <section className="horarios-juego">
          <HorariosJuego />
        </section>

        <section className="location">
          <MapLocation/>
        </section>

        <footer className="footer">
          <div className="footer-info">
          
            <div className="footer-section">
              <h4>Teléfono</h4>
              <p>+50234950048</p>
              <h4>Correo</h4>
              <p>ejemplo@questories.com</p>
            </div>
            <div className="footer-section">
              <h4>Redes Sociales</h4>
              <p>Síguenos en nuestras redes sociales:</p>
              <a href="https://www.facebook.com/Questcards/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={25} color="blue" />
              </a>
              <a href="https://wa.me/+50234950048" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={25} color="green" />
              </a>
              <a href="https://www.instagram.com/questoris502" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} color="#E4405F" />
              </a>
              <a href="https://www.tiktok.com/@questoris" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={25} color="#010101" />
              </a>
            </div>
            <div className="footer-section">
              <h4>Información</h4>
              <p>Una marca de Questories</p>
              <p>&copy; 2024 Questories</p>
            </div>
          </div>
        </footer>

        <a
          href="https://wa.me/+50234950048"
          className="whatsapp-button"
          target="Magic Quest"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={50} color="white" />
        </a>
      </div>

      {/* Menú móvil */}
      {showMobileMenu && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMobileMenu} className="mobile-menu-link">Home</Link>
          <Link to="/productos" onClick={toggleMobileMenu} className="mobile-menu-link">Productos</Link>
        </div>
      )}
    </Router>
  );
}

export default App;
