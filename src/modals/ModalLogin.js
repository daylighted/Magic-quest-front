import React, { useState } from 'react';
import './ModalLogin.css'; 

const ModalLogin = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Botón de cerrar */}
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>

        <h2>Iniciar Sesión</h2>

        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" placeholder="Ingrese su usuario" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingrese su contraseña" />
        </div>

        <button className="submit-btn">Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default ModalLogin;
