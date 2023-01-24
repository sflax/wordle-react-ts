import { UserContext } from "../context/User-context";
// import { NavigationContext } from "../context/Navigation-context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./WelcomePage.scss";

function WelcomePage() {
  const { user } = useContext(UserContext);
  // const navigationContext = useContext(NavigationContext);
  return (
    <div className="welcomePage-wrapper">
      <div className="welcomePage-default">
        <h1>Welcome</h1>
        {user ? (
          <div>
            <h2>{user}</h2>
            <NavLink to={"/game"} id="linkToGame">
              Click here to play
            </NavLink>
          </div>
        ) : (
          <div>
            <h2>Guest</h2>
            <p>Please login to start playing</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
