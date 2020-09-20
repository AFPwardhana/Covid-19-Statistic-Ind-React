import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

const warnaTipeKasus = {
  kasus: {
    hex: "#CC1034",
    pengali: 800,
    kasus:"jumlah_kasus"
  },
  sembuh: {
    hex: "#7dd71d",
    pengali: 1200,
    kasus:"jumlah_sembuh"
  },
  meninggal: {
    hex: "#e8f044",
    pengali: 2000,
    kasus:"jumlah_meninggal"
  },
};


export const showDataOnMap = (data, TipeKasus) =>
  data.map((prov) => {
    return (
      <Circle
        key={prov.key}
        center={[prov.lokasi.lat, prov.lokasi.lon]}
        color={warnaTipeKasus[TipeKasus].hex}
        fillColor={warnaTipeKasus[TipeKasus].hex}
        fillOpacity={0.4}
        radius={Math.sqrt(prov[`jumlah_${TipeKasus}`]) * warnaTipeKasus[TipeKasus].pengali}
      >
        <Popup>
          <div className="info-container">
            <div className="info-name">{prov.key}</div>
            <div className="info-confirmed">
              Jumlah Kasus: {numeral(prov.jumlah_kasus).format("0,0")}
            </div>
            <div className="info-recovered">
              Jumlah Sembuh: {numeral(prov.jumlah_sembuh).format("0,0")}
            </div>
            <div className="info-deaths">
              Jumlah Meninggal: {numeral(prov.jumlah_meninggal).format("0,0")}
            </div>
          </div>
        </Popup>
      </Circle>
    );
  });
