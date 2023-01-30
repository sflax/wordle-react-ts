import React, { useContext, useEffect, useState } from "react";
import HelpModal from "./HelpModal";
import LoginModal from "./LoginModal";
import Button from "../UI/Button";
import "./Navbar.scss";
// import { NavigationContext } from "../../context/Navigation-context";
import { UserContext } from "../../context/User-context";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  // const { showLoginModal, setShowLoginModal, showHelpModal, setShowHelpModal } =
  //   useContext(NavigationContext);

  // const navigate = useNavigate();
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const showLoginHandler = () => setShowLoginModal(true);
  const HideLogintModalHandler = () => setShowLoginModal(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
  }, [setUser]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setUser("");
  };

  return (
    <div className="navbar-main">
      <Button className="button-general" id="gameRules" onClick={() => setShowHelpModal(true)}>
        Help
      </Button>
      <HelpModal onClose={() => setShowHelpModal(false)} showHelpModal={showHelpModal} />
      <Link to={"/welcome"}>
        <h1>Wordle {user ? user : ""}</h1>
      </Link>
      {user ? (
        <Button className="button-general" onClick={onLogoutHandler}>
          Logout
        </Button>
      ) : null}
      {!user ? (
        <Button className="button-general" id="loginHandler" onClick={showLoginHandler}>
          Login
        </Button>
      ) : null}

      <LoginModal onClose={HideLogintModalHandler} showLoginModal={showLoginModal} />
    </div>
  );
}

export default Navbar;
