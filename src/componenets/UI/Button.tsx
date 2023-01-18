import React from "react";
import "./Button.scss";
const Button = (props: any) => {
  return (
    <button
      type={props.type || "button-general"}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
