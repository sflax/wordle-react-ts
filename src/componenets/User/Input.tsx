import React, { useRef } from "react";
import { text } from "stream/consumers";

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label htmlFor="text">label</label>
      <input
        ref={inputRef}
        type="text"
        id="text"
        // value={value}
        // onChange={onChange}
      />
    </div>
  );
}

export default Input;
