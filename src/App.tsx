import React from "react";
import "./App.scss";
import UserForm from "./componenets/User/UserForm";

import GamePage from "./pages/GamePage";
// import { Position } from "./types/Position";
// import { GameStatus } from "./types/GameStatus";
// import { keyboardKey } from "@testing-library/user-event";

function App() {
  return (
    <div className="app">
      <UserForm />
      {/* <GamePage /> */}
    </div>
  );
}

export default App;
