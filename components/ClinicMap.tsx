"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Placeholder coordinates (General Santos City area). Replace with the clinic's exact location.
const CLINIC_POSITION: [number, number] = [6.1164, 125.1716];

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ClinicMap() {
  return (
    <MapContainer
      center={CLINIC_POSITION}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "320px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={CLINIC_POSITION} icon={icon}>
        <Popup>FPOP Community Health Care Clinic (sample location)</Popup>
      </Marker>
    </MapContainer>
  );
}