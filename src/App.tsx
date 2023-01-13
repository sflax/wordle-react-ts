import React, { useState, useContext, useEffect } from "react";
import "./App.scss";
import Navbar from "./componenets/Navbar/Navbar";
import GuessBoard from "./componenets/GuessBoard/GuessBoard";
import KeyBoard from "./componenets/KeyBoard/KeyBoard";
import { BoardGameContext } from "./Providers/wordle-context";
import { Position } from "./types/Position";

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

  // function handleKeyUp(event: string) {
  //   const charValidation = /^[A-Z]$/.test(event);
  //   console.log(event);

  //   if (!charValidation) {
  //     return;
  //   }
  //   // onAddLetter(event);
  // }

  const onAddLetter = (keyValue: string) => {
    if (keyValue === "DEL") {
      return onRemoveLetter();
    }

    // const charValidation = /^[A-Z]$/.test(keyValue);
    // if (!charValidation) {
    //   return;
    // }

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
          onAddLetter,
          onRemoveLetter,
        }}
      >
        <div
          className="board"
          // onKeyUp={(event) => handleKeyUp(event.key.toUpperCase())}
        >
          <GuessBoard />
          <KeyBoard />
        </div>
      </BoardGameContext.Provider>
    </div>
  );
}

export default App;
