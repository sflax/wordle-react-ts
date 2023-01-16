import React, { useState } from "react";
import HelpModal from "../UI/HelpModal";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="navbar-main">
      <button id="gameRules" onClick={() => setShow(true)}>
        Help
      </button>
      <HelpModal onClose={() => setShow(false)} show={show} />
      <h1>Wordle</h1>
      {/* <Link to="wordle-game">aa</Link> */}
      <button id="logout">Logout</button>
    </div>
  );
}

export default Navbar;
