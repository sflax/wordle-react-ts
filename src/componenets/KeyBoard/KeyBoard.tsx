import React from "react";
import KeyLetter from "./KeyLetter";
import "./KeyBoard.scss";

function KeyBoard() {
  const firstRow: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow: string[] = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard-main">
      <div className="firstKeyRow">
        {firstRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter + Math.random().toString()} />;
        })}
      </div>
      <div className="secondKeyRow">
        {secondRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter + Math.random().toString()} />;
        })}
      </div>
      <div className="thirdKeyRow">
        {thirdRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter + Math.random().toString()} />;
        })}
        <KeyLetter keyValue={"DEL"} key={"del"} />
      </div>
    </div>
  );
}

export default KeyBoard;
