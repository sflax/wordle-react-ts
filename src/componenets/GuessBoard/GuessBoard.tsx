import React from "react";
import { GuessRow } from "./GuessRow";

function GuessBoard() {
  const rows: number[] = [0, 1, 2, 3, 4, 5];
  return (
    <div>
      {rows.map((row) => (
        <GuessRow rowNum={row} />
      ))}
    </div>
  );
}

export default GuessBoard;
