import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WelcomePage from "../pages/WelcomePage";
import GamePage from "../pages/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/welcome",
        element: <WelcomePage />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
    ],
  },
]);
