import React, { useState } from "react";
import HelpModal from "../UI/HelpModal";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import "./Navbar.scss";

function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="navbar-main">
      <Button
        className="button-general"
        id="gameRules"
        onClick={() => setShow(true)}
      >
        Help
      </Button>
      <HelpModal onClose={() => setShow(false)} show={show} />
      <h1>Wordle</h1>
      {/* <Link to={"wordle-game"}>aa</Link> */}
      <Button className="button-general" id="login">
        Login
      </Button>
    </div>
  );
}

export default Navbar;
