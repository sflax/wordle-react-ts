import React, { useState, useContext, useEffect } from "react";
import "./App.scss";
import Navbar from "./componenets/Navbar/Navbar";
import GuessBoard from "./componenets/GuessBoard/GuessBoard";
import KeyBoard from "./componenets/KeyBoard/KeyBoard";
import { BoardGameContext } from "./context/wordle-context";
import { Position } from "./types/Position";
import { GameStatus } from "./types/GameStatus";
import { keyboardKey } from "@testing-library/user-event";

const boardGame: string[][] = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  // ["", "", "", "", ""],
];

function App() {
  const [board, setBoard] = useState(boardGame);
  const [currentGuess, setCurrentGuess] = useState<Position>({
    rowNum: 0,
    letterPos: 0,
  });
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    gameOver: false,
    guessedWord: false,
  });

  // const { letterPos, rowNum, letter } = useContext(BoardGameContext);

  const temporaryWordToCompare: string = "JABRA";

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

  const onSelectLetter = (keyValue: string) => {
    if (keyValue === "DEL") {
      return onRemoveLetter();
    }

    const updatedGuessBoard = [...board];
    updatedGuessBoard[currentGuess.rowNum][currentGuess.letterPos] = keyValue;
    setBoard(updatedGuessBoard);
    setCurrentGuess({ ...currentGuess, letterPos: currentGuess.letterPos + 1 });

    if (currentGuess.letterPos === 4) {
      // check(letterPos, rowNum, letter);
      let userInput = board[currentGuess.rowNum];
      console.log(userInput);

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

  const wordExistanceVerificationHandler = () => {
    //handler that helps checking whether the word the user entered exists in the DB
    let userInputWord = "";
    for (let char = 0; char < 5; char++) {
      userInputWord += board[currentGuess.rowNum][char];
    }

    if (userInputWord === temporaryWordToCompare) {
    }

    //  if (wordsDB.includes(userInputWord)){
    //   setCurrentGuess({rowNum: currentGuess.rowNum + 1, letterPos:0})
    //  } else {
    // return
    //add popup
  };

  const gameStatusHandler = () => {
    let message = "";
    if (gameStatus.guessedWord) {
      message = `Congratulation, you correcty guessed the word in you ${currentGuess.rowNum}`;
    } else {
      message = `Nice try, but the correct guess was the word ${temporaryWordToCompare}.`;
    }

    return message;
  };

  // const letterSpotStatusColor = (letter, letterPos, rowNum) => {
  //   const correctSpot = temporaryWordToCompare[letterPos] === letter;
  // };

  return (
    <div className="app">
      <Navbar />
      <BoardGameContext.Provider
        value={{
          board,
          setBoard,
          currentGuess,
          setCurrentGuess,
          onSelectLetter,
          onRemoveLetter,
          temporaryWordToCompare,
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
