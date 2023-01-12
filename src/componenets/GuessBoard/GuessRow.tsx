import React, { useContext } from "react";
import { RowNum } from "../../types/Position";
import { GuessLetter } from "./GuessLetter";
import { BoardGameContext } from "../../Providers/wordle-context";

export const GuessRow: React.FC<RowNum> = ({ rowNum }) => {
  const letters: number[] = [0, 1, 2, 3, 4];
  return (
    <div className="row">
      {letters.map((letter) => (
        <GuessLetter
          letterPos={letter}
          rowNum={rowNum}
          key={Math.random.toString()}
        />
      ))}
    </div>
  );
};

// export default GuessRow;
