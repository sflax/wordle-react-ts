import React from "react";
import { Position } from "../../types/Position";

export const GuessLetter: React.FC<Position> = ({
  letterPos,
  rowNum,
}: Position) => {
  return (
    <div
      className="letter-default"
      data-letterPos={letterPos}
      data-rowNum={rowNum}
    >
      letter
    </div>
  );
};

// export default GuessLetter;
