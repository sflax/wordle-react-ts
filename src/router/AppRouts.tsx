import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WelcomePage from "../pages/WelcomePage";
import GamePage from "../pages/GamePage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
    ],
  },
]);
