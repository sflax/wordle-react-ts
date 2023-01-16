import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WelcomePage from "../pages/WelcomePage";
import GamePage from "../pages/GamePage";
import { Children } from "react";

export const AppRouts = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "welcome",
        element: <WelcomePage />,
      },
      {
        path: "wordle-game",
        element: <GamePage />,
      },
    ],
  },
]);
