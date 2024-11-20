import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToProductos = () => {
    navigate('/productos');
  };

  return (
    <header className="App-header">
        <div className="header-container">
      <h1
        onClick={handleNavigateToProductos}
        style={{ cursor: 'pointer', color: 'white'}}
      >
        Productos
      </h1>
      {/* Otros elementos del header */}
      </div>
    </header>
  );
};

export default Header;