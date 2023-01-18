import React, { useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./UserForm.scss";
import { UserContext } from "../../context/User-context";
import { Navigate, useNavigate } from "react-router-dom";

const UserForm = () => {
  const userContext = useContext(UserContext);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userTarget = event.currentTarget;
    const userData = {
      userName: userTarget.userName.value,
      password: userTarget.password.value,
    };
    // userContext.setUser({ ...userData });
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
        <Button className="button-general" type={"submit"} value={"submit"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
