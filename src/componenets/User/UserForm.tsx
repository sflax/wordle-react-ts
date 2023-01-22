import React, { useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./UserForm.scss";
import { UserContext } from "../../context/User-context";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  // const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userTarget = event.currentTarget;
    const userData = {
      userName: userTarget.userName.value,
      password: userTarget.password.value,
    };
    localStorage.setItem("user", userData.userName);
    setUser({ userName: userData.userName, password: userData.password });
    // navigate("/game");
  };

  return (
    <div>
      <form className="userForm" onSubmit={(event) => onSubmitHandler(event)}>
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
