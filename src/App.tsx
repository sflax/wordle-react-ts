import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./componenets/Navbar/Navbar";
import GuessBoard from "./componenets/GuessBoard/GuessBoard";
import KeyBoard from "./componenets/KeyBoard/KeyBoard";

const boardGame = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function App() {
  const [board, setBoard] = useState(boardGame);
  const [currentTry, setCurrentTry] = useState({
    letterPos: 0,
    rowNum: 0,
  });
  return (
    <div className="board">
      <Navbar />
      {/* </Navbar> */}
      <GuessBoard />
      <KeyBoard />
    </div>
  );
}

export default App;
