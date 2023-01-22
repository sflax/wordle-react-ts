import React, { useContext, useState } from "react";
import HelpModal from "./HelpModal";
import LoginModal from "./LoginModal";
import Button from "../UI/Button";
import "./Navbar.scss";
import { NavigationContext } from "../../context/Navigation-context";
import { UserContext } from "../../context/User-context";
import { Navigate, useNavigate, Link } from "react-router-dom";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // const [showLogout, setShowLogot] = useState<boolean>(false);

  // const showHelpModalHandler = () => setShowHelpModal(true);
  // const HideHelpModalHandler = () => setShowHelpModal(false);

  const showLoginHandler = () => {
    setShowLoginModal(true);
    // setShowLogot(true);
  };

  const HideLogintModalHandler = () => setShowLoginModal(false);

  if (localStorage.getItem("user")) {
    setUser(localStorage.getItem("user"));
  }

  const onLogoutHandler = () => {
    // setShowLoginModal(true);
    localStorage.clear();
    setUser("");
    navigate("/welcome");
  };

  return (
    <div className="navbar-main">
      <Button
        className="button-general"
        id="gameRules"
        onClick={() => setShowHelpModal(true)}
      >
        Help
      </Button>
      <HelpModal
        onClose={() => setShowHelpModal(false)}
        showHelpModal={showHelpModal}
      />
      <Link to={"/welcome"}>
        <h1>Wordle</h1>
      </Link>

      {user ? (
        <Button className="button-general" onClick={onLogoutHandler}>
          Logout
        </Button>
      ) : null}
      {!user ? (
        <Button
          className="button-general"
          id="loginHandler"
          onClick={showLoginHandler}
        >
          Login
        </Button>
      ) : null}

      <LoginModal
        onClose={HideLogintModalHandler}
        showLoginModal={showLoginModal}
      />
    </div>
  );
}

export default Navbar;
