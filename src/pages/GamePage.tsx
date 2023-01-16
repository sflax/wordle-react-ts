import React from "react";
import Navbar from "../componenets/Navbar/Navbar";
import GuessBoard from "../componenets/GuessBoard/GuessBoard";
import KeyBoard from "../componenets/KeyBoard/KeyBoard";
import { BoardGameContext } from "../context/wordle-context";
import useWordle from "../hooks/useWordle";

function GamePage() {
  const wordleApi = useWordle();
  return (
    // <div className="wordle-app">
    <>
      <Navbar />
      <BoardGameContext.Provider value={wordleApi}>
        <GuessBoard />
        <KeyBoard />
      </BoardGameContext.Provider>
    </>
  );
}

export default GamePage;
