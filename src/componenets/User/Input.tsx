import React, { useRef, useImperativeHandle, FC } from "react";
import { InputProps } from "../../types/User";

const Input: FC<InputProps> = ({ name, label, ref, type }) => {
  // const inputRef = useRef();

  // const activate = () => {
  //   inputRef.current.focus();
  // };

  // useImperativeHandle(ref, () => {
  //   return {
  //     focus: activate,
  //   };
  // });

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} ref={ref} />
    </div>
  );
};

export default Input;
