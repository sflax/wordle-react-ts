import React, { useState, useContext, useEffect, Key } from "react";
import "./App.scss";
import Navbar from "./componenets/Navbar/Navbar";
import GuessBoard from "./componenets/GuessBoard/GuessBoard";
import KeyBoard from "./componenets/KeyBoard/KeyBoard";
import { BoardGameContext } from "./Providers/wordle-context";
import { Position } from "./types/Position";
import { keyboardKey } from "@testing-library/user-event";

const boardGame: string[][] = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function App() {
  const [board, setBoard] = useState(boardGame);
  const [currentGuess, setCurrentGuess] = useState<Position>({
    rowNum: 0,
    letterPos: 0,
  });

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
  // useEffect(() => {
  //   const handleKeyUp = ({ key }: { key: string }) => {
  //     const charValidation = /^[a-z]$/.test(key);
  //     if (key === "Backspace") {
  //       return onRemoveLetter();
  //     }
  //     if (!charValidation) {
  //       return;
  //     }
  //     onSelectLetter(key.toUpperCase());
  //   };

  //   document.addEventListener("keyup", handleKeyUp);
  //   return () => {
  //     document.removeEventListener("keyup", handleKeyUp);
  //   };
  // });
  const onSelectLetter = (keyValue: string) => {
    if (keyValue === "DEL") {
      return onRemoveLetter();
    }

    const updatedGuessBoard = [...board];
    updatedGuessBoard[currentGuess.rowNum][currentGuess.letterPos] = keyValue;
    setBoard(updatedGuessBoard);
    setCurrentGuess({ ...currentGuess, letterPos: currentGuess.letterPos + 1 });

    if (currentGuess.letterPos === 4) {
      setCurrentGuess({
        letterPos: 0,
        rowNum: currentGuess.rowNum + 1,
      });
    }
  };

  const onRemoveLetter = () => {
    if (currentGuess.letterPos === 0) return;
    const updatedGuessBoard = [...board];
    updatedGuessBoard[currentGuess.rowNum][currentGuess.letterPos - 1] = "";
    setBoard(updatedGuessBoard);
    setCurrentGuess({ ...currentGuess, letterPos: currentGuess.letterPos - 1 });
  };

  return (
    <div className="app">
      <Navbar />
      {/* </Navbar> */}
      <BoardGameContext.Provider
        value={{
          board,
          setBoard,
          currentGuess,
          setCurrentGuess,
          onSelectLetter,
          onRemoveLetter,
        }}
      >
        <div className="board">
          <GuessBoard />
          <KeyBoard />
        </div>
      </BoardGameContext.Provider>
    </div>
  );
}

export default App;
