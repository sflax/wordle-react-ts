import React, { useContext } from "react";
import { BoardGameContext } from "../../context/wordle-context";
import "./KeyLetter.scss";

function KeyLetter({ keyValue }: any) {
  const { onSelectLetter } = useContext(BoardGameContext);

  const onClickLetter = () => {
    onSelectLetter(keyValue);
  };
  return (
    <button className="keyletter-button" key={keyValue} onClick={onClickLetter}>
      <span className="front">{keyValue}</span>
    </button>
  );
}

export default KeyLetter;
