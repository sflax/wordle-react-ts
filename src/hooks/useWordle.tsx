import { useState, useEffect } from "react";
import { Position } from "../types/Position";
import { keyboardKey } from "@testing-library/user-event";

function useWordle() {
  const boardGame: string[][] = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
  ];

  const [board, setBoard] = useState(boardGame);
  const [currentGuess, setCurrentGuess] = useState<Position>({
    rowNum: 0,
    letterPos: 0,
  });

  const temporaryWordToCompare = "JABRA";

  const handleKeyUp = (event: keyboardKey) => {
    const keyToValidate = event.key as string;
    const charValidation = /^[a-z]$/.test(keyToValidate);
    if (event.key === "Backspace") {
      return onRemoveLetter();
    }
    if (!charValidation) {
      return;
    }
    onSelectLetter(keyToValidate.toUpperCase());
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  async function onSelectLetter(keyValue: string) {
    if (keyValue === "DEL") {
      return onRemoveLetter();
    }
    const updatedGuessBoard = [...board];
    updatedGuessBoard[currentGuess.rowNum][currentGuess.letterPos] = keyValue;
    setBoard(updatedGuessBoard);
    setCurrentGuess({ ...currentGuess, letterPos: currentGuess.letterPos + 1 });

    if (currentGuess.letterPos === 4) {
      let userWordToCompare = board[currentGuess.rowNum];
      wordExistanceVerificationHandler(userWordToCompare);

      if (currentGuess.rowNum === 4) {
        setCurrentGuess({
          letterPos: 0,
          rowNum: 0,
        });
      }
      setCurrentGuess({
        letterPos: 0,
        rowNum: currentGuess.rowNum + 1,
      });
    }
  }

  const onRemoveLetter = () => {
    if (currentGuess.letterPos === 0) return;
    const updatedGuessBoard = [...board];
    updatedGuessBoard[currentGuess.rowNum][currentGuess.letterPos - 1] = "";
    setBoard(updatedGuessBoard);
    setCurrentGuess({ ...currentGuess, letterPos: currentGuess.letterPos - 1 });
  };

  async function wordExistanceVerificationHandler(wordToCompare: string[]) {
    let userInput = "";

    for (let char = 0; char < wordToCompare.length; char++) {
      userInput += wordToCompare[char];
    }
    if (userInput === temporaryWordToCompare) {
      alert("you won");
      window.location.reload();
    }
  }

  return {
    board,
    setBoard,
    currentGuess,
    setCurrentGuess,
    onSelectLetter,
    onRemoveLetter,
    temporaryWordToCompare,
  };
}

export default useWordle;
