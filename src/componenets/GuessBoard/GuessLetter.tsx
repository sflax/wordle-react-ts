import React, { useContext } from "react";
import { Position } from "../../types/Position";
import { BoardGameContext } from "../../context/wordle-context";
import "./GuessLetter.scss";

export const GuessLetter: React.FC<Position> = ({ letterPos, rowNum }: Position) => {
  const { board, currentGuess, temporaryWordToCompare } = useContext(BoardGameContext);
  let letter = board[rowNum][letterPos];

  const correctSpot = temporaryWordToCompare[letterPos] === letter;
  let letterColor = "";
  if (currentGuess.rowNum > rowNum) {
    if (correctSpot) {
      letterColor = "correctSpot";
    } else if (!correctSpot && temporaryWordToCompare.includes(letter)) {
      letterColor = "wrongSpot";
    } else {
      letterColor = "notInAnySpot";
    }
  }

  const focusLetter = () => {
    if (currentGuess.letterPos === letterPos && currentGuess.rowNum === rowNum) {
      return "letterInFocus";
    }
    return "letter-default";
  };

  return (
    <div className={focusLetter()} data-rownum={rowNum} data-letterpos={letterPos} id={letterColor}>
      {letter}
    </div>
  );
};
