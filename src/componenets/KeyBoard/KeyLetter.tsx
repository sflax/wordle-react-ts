import React, { useContext } from "react";
import { BoardGameContext } from "../../Providers/wordle-context";

function KeyLetter({ keyValue }: any) {
  const { onRemoveLetter, onSelectLetter } = useContext(BoardGameContext);

  const onClickLetter = () => {
    if (keyValue === "DEL") {
      onRemoveLetter();
    } else {
      onSelectLetter(keyValue);
    }
  };
  return (
    <button className="keyletter-button" id={keyValue} onClick={onClickLetter}>
      {keyValue}
    </button>
  );
}

export default KeyLetter;
