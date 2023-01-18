import React from "react";
import { InputProps } from "../../types/User";
import "./Input.scss";

const Input = (props: InputProps) => {
  return (
    <input
      className={props.className || "input-default"}
      id={props.id}
      type={props.type || "text"}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
