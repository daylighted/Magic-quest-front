import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = () => {
  const navigate = useNavigate();

  const handleNavigateToProductos = () => {
    navigate('/productos');
  };

  const handleNavigateToIndex= () => {
    navigate('/');
  };

  return (
        
        <ul>
          <li onClick={handleNavigateToIndex}>Inicio</li>
          <li onClick={handleNavigateToProductos}>Productos</li>
        </ul>

  );
};

export default MobileMenu;