import React from "react";
import "./GuessBoard.scss";
import { GuessRow } from "./GuessRow";

function GuessBoard() {
  const rows: number[] = [0, 1, 2, 3, 4];

  return (
    <div className="guessBoard-default">
      {rows.map((row) => (
        <GuessRow rowNum={row} key={`${row}`} />
      ))}
    </div>
  );
}

export default GuessBoard;
