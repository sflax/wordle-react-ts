import React, { useContext } from "react";
import { Position } from "../../types/Position";
import { BoardGameContext } from "../../Providers/wordle-context";
export const GuessLetter: React.FC<Position> = ({
  letterPos,
  rowNum,
}: Position) => {
  const { board } = useContext(BoardGameContext);
  const letter = board[letterPos][rowNum];
  return (
    <div
      className="letter-default"
      data-letterPos={letterPos}
      data-rowNum={rowNum}
    >
      {letter}
    </div>
  );
};

// export default GuessLetter;
