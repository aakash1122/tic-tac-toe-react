import React from "react";

export default function Box({ value, pos, setBoxValue, winner }) {
  let onClickHandler = () => {
    if (!winner) {
      setBoxValue(pos);
    }
  };

  return (
    <div className="box" onClick={onClickHandler}>
      <span className="animtext">{value}</span>
    </div>
  );
}
// check box clicked or not
//change box value
//check for winner
//toggle player
