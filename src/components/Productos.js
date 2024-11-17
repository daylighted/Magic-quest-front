// src/components/Productos.js
import React, { useState, useEffect } from 'react';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API para obtener los productos
    // Por ahora, usamos datos de ejemplo
    const fetchProductos = async () => {
      const response = await fetch('/api/productos'); // Cambia esta URL por la de tu API
      const data = await response.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  return (
    <div className="productos-container">
      <h2>Productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
