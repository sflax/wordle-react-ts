import React, { useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./UserForm.scss";
import { UserContext } from "../../context/User-context";
import { useNavigate } from "react-router-dom";

interface FormProps {
  onSubmit: () => void;
}

const UserForm: React.FC<FormProps> = ({ onSubmit }) => {
  // const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userTarget = event.currentTarget;
    const userData = {
      userName: userTarget.userName.value,
      password: userTarget.password.value,
    };
    const user = userData.userName;
    const password = userData.password;
    localStorage.setItem("user", userData.userName);
    setUser({ userName: user, password: password });

    onSubmit();
  };

  return (
    <div>
      <form className="userForm" onSubmit={(event) => handleSubmit(event)}>
        <Input
          className="input-default input-upper"
          id="userName"
          type="userName"
          placeholder="Please enter username"
        />
        <Input
          className="input-default"
          id="password"
          type="password"
          placeholder="Please enter password"
        />
        <Button className="button-general" type="submit" value="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
