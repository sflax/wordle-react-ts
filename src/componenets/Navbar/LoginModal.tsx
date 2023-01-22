import React, { useContext } from "react";
import "./LoginModal.scss";
import Button from "../UI/Button";
import UserForm from "../User/UserForm";
import { UserContext } from "../../context/User-context";
const LoginModal = (props: any) => {
  const { user, setUser } = useContext(UserContext);

  if (!props.showLoginModal) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Hello Guest</h2>
          <p>Please enter username and password</p>
        </div>
        <div className="modal-body">
          <UserForm />
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default LoginModal;
