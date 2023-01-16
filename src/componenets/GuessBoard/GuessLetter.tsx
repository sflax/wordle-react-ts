import React, { useContext } from "react";
import { Position } from "../../types/Position";
import { BoardGameContext } from "../../context/wordle-context";
export const GuessLetter: React.FC<Position> = ({
  letterPos,
  rowNum,
}: Position) => {
  const { board, currentGuess, temporaryWordToCompare } =
    useContext(BoardGameContext);
  const letter = board[rowNum][letterPos];

  const defineGuessLetterTileStatus = () => {
    const correctSpot = temporaryWordToCompare[letterPos] === letter;
    if (currentGuess.rowNum > rowNum) {
      if (correctSpot) {
        return "correctSpot";
      } else if (!correctSpot && temporaryWordToCompare.includes(letter)) {
        return "wrongSpot";
      } else {
        return "notInAnySpot";
      }
    }
  };

  const focusLetter: boolean =
    letterPos === currentGuess.letterPos && rowNum === currentGuess.rowNum;

  return (
    <div
      className={focusLetter ? "letterInFocus" : "letter-default"}
      data-rownum={rowNum}
      data-letterpos={letterPos}
      id={`${defineGuessLetterTileStatus()}`}
    >
      {letter}
    </div>
  );
};

// export default GuessLetter;
