import React, { useContext } from "react";
import { Position } from "../../types/Position";
import { BoardGameContext } from "../../Providers/wordle-context";
export const GuessLetter: React.FC<Position> = ({
  letterPos,
  rowNum,
}: Position) => {
  const { board } = useContext(BoardGameContext);
  const letter = board[rowNum][letterPos];
  return (
    <div
      className="letter-default"
      data-rowNum={rowNum}
      data-letterPos={letterPos}
    >
      {letter}
    </div>
  );
};

// export default GuessLetter;
