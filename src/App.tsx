import React from "react";
import "./App.scss";

import GamePage from "./pages/GamePage";
// import { Position } from "./types/Position";
// import { GameStatus } from "./types/GameStatus";
// import { keyboardKey } from "@testing-library/user-event";

function App() {
  return (
    <div className="app">
      <GamePage />
    </div>
  );
}

export default App;
