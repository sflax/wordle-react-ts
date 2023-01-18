import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WelcomePage from "../pages/WelcomePage";
import GamePage from "../pages/GamePage";
import LoginPage from "../pages/GamePage";
// import { Children } from "react";

export const AppRouts = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/welcome",
        element: <WelcomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/wordle-game",
        element: <GamePage />,
      },
    ],
  },
]);
