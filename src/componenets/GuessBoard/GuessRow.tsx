import React from "react";
import GuessLetter from "./GuessLetter";

function GuessRow() {
  const letters: number[] = [0, 1, 2, 3, 4];
  return (
    <div className="row">
      {letters.map((letter) => (
        <GuessLetter />
      ))}
    </div>
  );
}

export default GuessRow;
