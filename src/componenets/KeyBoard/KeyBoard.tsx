import React from "react";
import KeyLetter from "./KeyLetter";

function KeyBoard() {
  const firstRow: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow: string[] = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard-main">
      <div className="firstKeyRow">
        {firstRow.map((keyLetter: string) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter} />;
        })}
      </div>
      <div className="secondKeyRow">
        {secondRow.map((keyLetter: string) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter} />;
        })}
      </div>
      <div className="thirdKeyRow">
        {thirdRow.map((keyLetter: string) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter} />;
        })}
        <KeyLetter keyValue={"DEL"} id={"del"} key={"del"} />
      </div>
    </div>
  );
}

export default KeyBoard;
