import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./componenets/Navbar/Navbar";
import GuessBoard from "./componenets/GuessBoard/GuessBoard";
import KeyBoard from "./componenets/KeyBoard/KeyBoard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GuessBoard />
      <KeyBoard />
    </div>
  );
}

export default App;
