import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  return (
    <div className="w-full h-[350px] ">
      <MapContainer center={[25.3176, 82.9739]} zoom={13} scrollWheelZoom={false} className="h-full w-full z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={[25.3176, 82.9739]}>
          <Popup>
            Varanasi – Anupam's Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
