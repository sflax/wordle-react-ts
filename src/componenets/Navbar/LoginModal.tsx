import React, { useCallback } from "react";
import "./LoginModal.scss";
import Button from "../UI/Button";
import UserForm from "../User/UserForm";
import { LoginProps } from "../../types/User";

// import { UserContext } from "../../context/User-context";

const LoginModal: React.FC<LoginProps> = ({ showLoginModal, onClose }) => {
  const handleFormSubmit = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!showLoginModal) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Hello Guest</h2>
          <p>Please enter username and password</p>
        </div>
        <div className="modal-body">
          <UserForm onSubmit={handleFormSubmit} />
        </div>
        <div className="modal-footer">
          {/* <Button className="button-general" onClick={onClose}>
            Close
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
