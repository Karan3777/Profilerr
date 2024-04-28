

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ profile }) => {
  const { name, location } = profile;

  return (
    <div className="map-container">
      <MapContainer center={[location.latitude, location.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '400px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>
            <strong>{name}</strong>
            <br />
            {location.address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
