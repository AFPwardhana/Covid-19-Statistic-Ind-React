import React from "react";
import numeral from "numeral";

export default function TableInfo(IsiTable) {
  return (
    <div className="col-md-8 col-md-offset-8 blog-main mb-4">
      <input
        type="search"
        id="search"
        className="form-control border-bottom"
        placeholder="Search"
      ></input>
      <div className="table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table table-striped results">
          <thead>
            <tr className="table-info">
              <th scope="col">Provinsi</th>
              <th scope="col" >
                Kasus
              </th>
              <th scope="col" >
                Meninggal
              </th>
              <th scope="col" >
                Sembuh
              </th>
            </tr>
            <tr className="warning no-result">
              <td colSpan="4">
                <i className="fa fa-warning"></i> No result
              </td>
            </tr>
          </thead>
          <tbody className="table-borderless " id="table">
            {IsiTable.IsiTable.map((provinsi, i) => (
              <tr key={provinsi.key}>
                <th scope="row">{provinsi.key}</th>
                <td>{numeral(provinsi.jumlah_kasus).format("0,0")}</td>
                <td>{numeral(provinsi.jumlah_meninggal).format("0,0")}</td>
                <td>{numeral(provinsi.jumlah_sembuh).format("0,0")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
