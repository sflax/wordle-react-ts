import React, { useContext } from "react";
import "./App.scss";
import { UserContext } from "./context/User-context";
import Navbar from "./componenets/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useUser } from "./hooks/useUser";
// import { NavigationContext } from "./context/Navigation-context";

function App() {
  const userContext = useUser();
  return (
    <div className="app">
      <UserContext.Provider value={userContext}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
