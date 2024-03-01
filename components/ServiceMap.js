// components/MapComponent.js
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

const DEFAULT_CENTER = [51.505, -0.09];

const ServiceMap = ({ coords, setAddress, address }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && map && address) {
      const { lat, lng } = address;
      map.flyTo([lat, lng]);
    }
  }, [address, map]);

  return (
    <div className='relative block w-full h-96 max-w-screen-lg mx-auto'>
      <MapContainer center={DEFAULT_CENTER} zoom={6} scrollWheelZoom={false} style={{ height: '400px', width: '600px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {coords.map((location) => (
          <Marker position={[location.lat, location.lng]} key={location.id} onmouseover={() => setAddress(location)}>
            {address && (
              <Popup position={[address.lat, address.lng]} onClose={() => setAddress(null)}>
                <div>
                  <strong>{address.city}</strong>
                  <p>{address.address}</p>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
   
  );
};

export default ServiceMap;
