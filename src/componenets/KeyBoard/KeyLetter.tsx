import React from "react";

function KeyLetter({ keyValue }: any) {
  return (
    <button className="keyletter-button" id={keyValue} onClick={onClickLetter}>
      {keyValue}
    </button>
  );
}

export default KeyLetter;
