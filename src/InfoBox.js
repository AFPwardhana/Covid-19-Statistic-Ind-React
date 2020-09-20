import React, { useState } from "react";
import Peta from "./Peta";
import IsiBox from "./IsiBox";

export default function InfoBox({ Datakasus, DataProvinsi }) {
  const [TipeKasus, setTipeKasus] = useState("kasus");
  return (
    <aside className="col-md-4 blog-sider p-4 bg-light rounded" style={{height: "26.5rem"}}>
      <h4 className="totalKasus font-italic ">Kasus Di Indonesia</h4>
      <div className="app_stat">
        <div className="card extend-top">
          <IsiBox onClick={(e) => setTipeKasus("kasus")} 
          title="Kasus" active ={TipeKasus ==="kasus"} 
          Data={Datakasus.jumlah_positif} 
          isRed />
        </div>
        <div className="card extend-middle ">
          <IsiBox onClick={(e) => setTipeKasus("meninggal")} 
          title="Meninggal" active ={TipeKasus ==="meninggal"} 
          Data={Datakasus.jumlah_meninggal}
           />
        </div>
        <div className="card extend-bottom">
          <IsiBox onClick={(e) => setTipeKasus("sembuh")} 
          title="Sembuh" active ={TipeKasus ==="sembuh"} 
          Data={Datakasus.jumlah_sembuh} 
          isGreen />
        </div>
      </div>
      <div className="mt-4">
        <Peta provinsi={DataProvinsi} Tipe={TipeKasus} />
      </div>
    </aside>
  );
}
