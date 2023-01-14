import React, { useContext } from "react";
import { BoardGameContext } from "../../Providers/wordle-context";

function KeyLetter({ keyValue }: any) {
  const { onSelectLetter } = useContext(BoardGameContext);

  const onClickLetter = () => {
    onSelectLetter(keyValue);
  };
  return (
    <button className="keyletter-button" key={keyValue} onClick={onClickLetter}>
      {keyValue}
    </button>
  );
}

export default KeyLetter;
