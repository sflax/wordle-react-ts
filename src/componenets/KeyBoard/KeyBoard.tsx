import React from "react";
import KeyLetter from "./KeyLetter";

function KeyBoard({ keyValue }: any) {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard-main">
      <div className="firstKeyRow">
        {firstRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} />;
        })}
      </div>
      <div className="secondKeyRow">
        {secondRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} />;
        })}
      </div>
      <div className="thirdKeyRow">
        {thirdRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} />;
        })}
        <KeyLetter keyValue={"DEL"} id={"del"} />
      </div>
    </div>
  );
}

export default KeyBoard;
