import React, { useState } from "react";
import HelpModal from "../UI/HelpModal";

function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="navbar-main">
      <button onClick={() => setShow(true)}>Game Rules</button>
      <HelpModal onClose={() => setShow(false)} show={show} />
      <h1>Wordle</h1>
      <button>settings</button>
    </div>
  );
}

export default Navbar;
