import React, { useEffect, useContext } from "react";
import KeyLetter from "./KeyLetter";
import { BoardGameContext } from "../../Providers/wordle-context";

function KeyBoard() {
  const firstRow: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow: string[] = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onAddLetter, onRemoveLetter } = useContext(BoardGameContext);

  useEffect(() => {
    const handleKeyUp = ({ key }: { key: string }) => {
      // const keyToValidate = key.toUpperCase();
      const charValidation = /^[a-z]$/.test(key);
      if (key === "Backspace") {
        return onRemoveLetter();
      }
      if (!charValidation) {
        return;
      }
      onAddLetter(key.toUpperCase());
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div className="keyboard-main">
      <div className="firstKeyRow">
        {firstRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter} />;
        })}
      </div>
      <div className="secondKeyRow">
        {secondRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter} />;
        })}
      </div>
      <div className="thirdKeyRow">
        {thirdRow.map((keyLetter) => {
          return <KeyLetter keyValue={keyLetter} key={KeyLetter} />;
        })}
        <KeyLetter keyValue={"DEL"} id={"del"} />
      </div>
    </div>
  );
}

export default KeyBoard;
