import React, { useState, useContext } from "react";
import "./App.scss";
import { UserContext } from "./context/User-context";
import GamePage from "./pages/GamePage";
import WelcomePage from "./pages/WelcomePage";
import Navbar from "./componenets/Navbar/Navbar";
import UserForm from "./componenets/User/UserForm";
import { Outlet, useNavigation } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import { NavigationContext } from "./context/Navigation-context";
// import { BoardGameContext } from "./context/wordle-context";

function App() {
  // const [user, setUser] = useState([]);
  // const { showWelcomePage, setShowWelcomePage } = useWordle();
  const userContext = useContext(UserContext);
  return (
    //define class for width 100 instead of the "app"
    <>
      <NavigationContext.Provider value={useNavigation()}>
        <UserContext.Provider value={useUser()}>
          {/* <UserForm /> */}
          {<Navbar />}
          {<Outlet />}
        </UserContext.Provider>
      </NavigationContext.Provider>
    </>
  );
}

export default App;
