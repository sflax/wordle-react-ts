import { UserContext } from "../context/User-context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../componenets/UI/Button";
import UserForm from "../componenets/User/UserForm";

function WelcomePage() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome</h1>
      {user ? <h2>{user.userName}</h2> : <h2>Guest</h2>}
      <NavLink to={"/wordle-game"}>Click here to play</NavLink>
    </div>
  );
}

export default WelcomePage;
