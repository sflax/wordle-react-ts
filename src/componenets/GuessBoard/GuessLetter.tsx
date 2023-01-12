import React, { useContext } from "react";
import { Position } from "../../types/Position";
import { BoardGameContext } from "../../Providers/wordle-context";
export const GuessLetter: React.FC<Position> = ({
  letterPos,
  rowNum,
}: Position) => {
  const { board, currentGuess } = useContext(BoardGameContext);
  const letter = board[rowNum][letterPos];

  const focusLetter: boolean =
    letterPos === currentGuess.letterPos && rowNum === currentGuess.rowNum;

  return (
    <div
      className={focusLetter ? "letterInFocus" : "letter-default"}
      data-rownum={rowNum}
      data-letterpos={letterPos}
      key={Math.random.toString()}
    >
      {letter}
    </div>
  );
};

// export default GuessLetter;
