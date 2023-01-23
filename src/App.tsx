import React from "react";
import "./App.scss";
import { UserContext } from "./context/User-context";
import Navbar from "./componenets/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import { useUser } from "./hooks/useUser";
import { NavigationContext } from "./context/Navigation-context";

function App() {
  return (
    <div className="app">
      <UserContext.Provider value={useUser()}>
        <NavigationContext.Provider value={useNavigation()}>
          {<Navbar />}
          {<Outlet />}
        </NavigationContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
