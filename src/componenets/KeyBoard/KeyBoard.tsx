import React from "react";
import KeyLetter from "./KeyLetter";

function KeyBoard({ keyValue }: any) {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard-main">
      <div className="row">
        {firstRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} />;
        })}
      </div>
      <div className="row">
        {secondRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} />;
        })}
      </div>
      <div className="row">
        {thirdRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} />;
        })}
      </div>
    </div>
  );
}

export default KeyBoard;
