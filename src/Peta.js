import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

export default function Peta({provinsi, Tipe}) {
  const TengahIndonesia = { lat: -3.843571, lng: 117.665106 };
  return (
    <div className="peta">
      <LeafletMap center={TengahIndonesia} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(provinsi, Tipe)}
      </LeafletMap>
    </div>
  );
}
