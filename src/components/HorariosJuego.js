import React from 'react';
import './HorariosDeJuego.css';

const HorariosDeJuego = () => {
  // Asignar imágenes a cada torneo
  const imagenesTorneos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/2560px-Magicthegathering-logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pokémon_Trading_Card_Game_logo.svg/1200px-Pokémon_Trading_Card_Game_logo.svg.png"
  ];

  // Obtener el día de la semana (0 = Domingo, 6 = Sábado)
  const hoy = new Date().getDay();
  // Asignar al azar un torneo para cada día (puedes cambiar la lógica según sea necesario)
  const torneosSemana = ['Magic', 'Yu-Gi-Oh', 'Pokemon', 'Magic', 'Yu-Gi-Oh', 'Pokemon', 'Magic'];
  const torneoHoy = torneosSemana[hoy];

  // Obtener imagen según el torneo
  const obtenerImagenTorneo = (torneo) => {
    switch (torneo) {
      case 'Magic':
        return imagenesTorneos[0];
      case 'Yu-Gi-Oh':
        return imagenesTorneos[1];
      case 'Pokemon':
        return imagenesTorneos[2];
      default:
        return '';
    }
  };

  return (
    <div className="horarios-container">
      {/* Sección de Hoy como tarjeta */}
      <div className="horario-hoy-tarjeta">
        <h2>Hoy</h2>
        <p>{torneoHoy} - Horario de atención: 9:00 AM - 6:00 PM</p>
        <img src={obtenerImagenTorneo(torneoHoy)} alt={`${torneoHoy}`} className="imagen-torneo-hoy" />
      </div>

      {/* Tabla de horarios para la semana */}
      <table className="horarios-table">
        <thead>
          <tr>
            <th>Domingo</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {torneosSemana.map((torneo, index) => (
              <td key={index} className={index === hoy ? 'hoy' : ''}>
                <img src={obtenerImagenTorneo(torneo)} alt={`${torneo}`} className="horarios-imagen" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorariosDeJuego;
