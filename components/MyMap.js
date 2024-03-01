import React, {useEffect, useState} from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


function MyMap() {
  const position = [39.04814576696578, 58.9551388487302]; // latitude and longitude

  const coords = [
    {addresslat: "37.903299", addresslng: "58.381460"}, 
    {addresslat: "39.518561", addresslng: "54.339540"},
    {addresslat: "37.609516", addresslng: "61.852505"},
    {addresslat: "37.907311", addresslng: "58.506063"},
  ];

  const locationTest = [
    {city: 'Ashgabat', address: 'Parahat 2, Imperial Business Center, 7 floor'}, 
    {city: 'Balkan', address: 'Parahat 2, Imperial Business Center, 7 floor'}, 
    {city: 'Mary', address: 'Parahat 2, Imperial Business Center, 7 floor'}, 
    {city: 'Ahal', address: 'Parahat 2, Imperial Business Center, 7 floor'}
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
      // Simulate a delay for loading (remove this in a real-world scenario)
      await new Promise(resolve => setTimeout(resolve, 100));

      // Update the loading state once the map is initialized
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
     {isLoading && <h2>Loading Map...</h2>}

     {!isLoading && (
      <MapContainer center={position} zoom={6} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {coords.map((coord, index) => (
        <Marker key={index} position={[coord.addresslat, coord.addresslng]}>
          <Popup>
            {locationTest[index].city} <br /> {locationTest[index].address}
          </Popup>
        </Marker>
      ))}
      </MapContainer>
     )
    }
    </>
    
  );
}

export default MyMap;