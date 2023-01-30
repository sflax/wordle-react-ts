import React from "react";
import "./Modal.scss";
import Button from "../UI/Button";

const Modal = (props: any) => {
  if (!props.showModal) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">{props.header}</div>
        <div className="modal-body">{props.modal}</div>
        <div className="modal-footer">{props.footer}</div>
        <Button className={props.className} onClick={props.onClose}></Button>
      </div>
    </div>
  );
};

export default Modal;
