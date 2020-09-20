import React from "react";
import numeral from "numeral";

export default function IsiBox({title, active, isRed, isGreen, Data, ...props}) {
  return (
    <div
    onClick={props.onClick} 
    className ={`${active && "infoBox--selected"} 
    ${ isRed && "infoBox--red"} ${ isGreen && "infoBox--green"}`}>
      <h5 className="text-muted">{title}</h5>
      <p className={`card-text ${ isRed && "infoBox--red--Text"} ${ isGreen && "infoBox--green--Text"}`}>{numeral(Data).format("0,0")}</p>
    </div>
  );
}
