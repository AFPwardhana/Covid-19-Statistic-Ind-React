import React, { useState, useEffect } from "react";
import $ from "jquery";
import Navbar from "./Navbar";
import InfoBox from "./InfoBox";
import TableInfo from "./Table";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  const urlAPI = "https://data.covid19.go.id/public/api/update.json",
    urlAPI2 = "https://data.covid19.go.id/public/api/prov.json";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const [SemuaInfo, setSemuaInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(proxyUrl + urlAPI)
      .then((response) => response.json())
      .then((data) => {
        setSemuaInfo(data.update.total);
      });
  }, []);
  console.log(SemuaInfo , tableData);
  useEffect(() => {
    const getDataProvinsi = async () => {
      fetch(proxyUrl + urlAPI2)
        .then((response) => response.json())
        .then((data) => {
          setTableData(data.list_data);
        });
    };
    getDataProvinsi();
  }, []);

  $(document).ready(function () {
    $("#search").keyup(function () {
      let searchTerm = $("#search").val();
      let searchSplit = searchTerm.replace(/ /, "'):containsi('");

      $.extend($.expr[":"], {
        containsi: function (elem, i, match, array) {
          return (
            (elem.textContent || elem.innerText || "")
              .toLowerCase()
              .indexOf((match[3] || "").toLowerCase()) >= 0
          );
        }
      });
      $(".results tbody tr")
        .not(":containsi('" + searchSplit + "')")
        .each(function (e) {
          $(this).attr("visible", "false");
        });

      $(".results tbody tr:containsi('" + searchSplit + "')").each(function (
        e
      ) {
        $(this).attr("visible", "true");
      });

      let jobCount = $('.results tbody tr[visible="true"]').length;
      if (jobCount === "0") {
        $(".no-result").show();
      } else {
        $(".no-result").hide();
      }
    });
  });

  return (
    <div className="App">
      <Navbar />
      <div className="container isi">
        <div className="row">
          <TableInfo IsiTable={tableData} />
          <InfoBox Datakasus={SemuaInfo} DataProvinsi={tableData} />
        </div>
      </div>
    </div>
  );
}
