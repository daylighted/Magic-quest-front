import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Para manejar el icono personalizado del marcador
import 'leaflet/dist/leaflet.css'; 
import { FaArrowRight } from 'react-icons/fa'; 

// Coordenadas de la tienda
const storeLocation = {
  lat: 14.642502954340904,
  lng: -90.56848395399471,
};
const MapLocation = () => {
  // Estilo para el icono del marcador
  const markerIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // URL del ícono genérico de Leaflet
    iconSize: [25, 41], // Tamaño del ícono
    iconAnchor: [12, 41], // Ajustamos el ancla del ícono
    popupAnchor: [1, -34], // Ajustamos la posición del popup
  });

  return (
    <div className="map-location-container">
      {/* Mapa con tamaño adaptativo */}
      <div className="map-container">
        <MapContainer
          center={storeLocation} // Centrar el mapa en la tienda
          zoom={16} // Nivel de zoom
          scrollWheelZoom={false} // Desactivar el zoom con scroll
          dragging={false} // Desactivar el movimiento del mapa
          touchZoom={false} // Desactivar el zoom táctil
          doubleClickZoom={false} // Desactivar el zoom al hacer doble clic
          style={{ width: '100%', height: '100%' }} // Tamaño del mapa adaptado al contenedor
        >
          {/* Capa de mapa de OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marcador con la ubicación */}
          <Marker position={storeLocation} icon={markerIcon}>
            <Popup>
              <span>
                Visítanos en Magic Quest! <br />
                <a
                  href={`https://www.google.com/maps?q=14.642502954340904,-90.56848395399471`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Google Maps
                </a>
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Información de la ubicación debajo del mapa */}
      <div className="location-info">
        <h2>Encuéntranos</h2>
        <p>Dirección: Calz. San Juan 14-25, Cdad</p>
        <p>Horario: Lunes a Viernes - 9:00 AM a 6:00 PM</p>
        <a
        href={`https://www.google.com/maps?q=14.642502954340904,-90.56848395399471`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn-directions">
          Ver en Google Maps
          <FaArrowRight className="arrow" />
        </button>
      </a>
      </div>
    </div>
  );
};

export default MapLocation;
