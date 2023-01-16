import React from "react";
import "./HelpModal.scss";

const HelpModal = (props: any) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>How To Play</h2>
          <p>Guess the Wordle in 5 Guesses</p>
        </div>
        <div className="modal-body">
          <h3>The Rules</h3>
          <ul>
            <li>Each guess must be a valid 5-letter word</li>
            <li>
              In each guess you can add or delete a letter <br />
              in the first four tiles, but once you add the fifth letter, the
              guess will be submitted.
              <br />
            </li>
            <li>
              The color of the tiles will change to shouw how close your guess
              was to the word.
            </li>
          </ul>
          <ul>
            <li>
              <span className="span-color green">Green</span> means the letter
              is in the word and in the correct spot.
            </li>
            <li>
              <span className="span-color yellow">Yellow</span> means the letter
              is in the word, but is the wrong spot.
            </li>
            <li>
              <span className="span-color gray">Grey</span> means the letter is
              not in the word at all.
            </li>
          </ul>
        </div>
        <div className="modal-footer"></div>
        <button className="button close-help-modal" onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default HelpModal;
