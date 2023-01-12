import React, { useState, useContext } from "react";
import "./App.scss";
import Navbar from "./componenets/Navbar/Navbar";
import GuessBoard from "./componenets/GuessBoard/GuessBoard";
import KeyBoard from "./componenets/KeyBoard/KeyBoard";
import { BoardGameContext } from "./Providers/wordle-context";

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
  const [currentGuess, setCurrentGuess] = useState({
    letterPos: 0,
    rowNum: 0,
  });
  return (
    <div className="board">
      <Navbar />
      {/* </Navbar> */}
      <BoardGameContext.Provider value={{ board, setBoard }}>
        <GuessBoard />
        <KeyBoard />
      </BoardGameContext.Provider>
    </div>
  );
}

export default App;
