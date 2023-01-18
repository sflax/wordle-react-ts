import React, { FormEvent, useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./UserForm.scss";
import { UserContext } from "../../context/User-context";
import { Navigate, useNavigate } from "react-router-dom";
import { User } from "../../types/User";

const UserForm = () => {
  const userContext = useContext(UserContext);

  // const navigate = useNavigate;
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userTarget = event.currentTarget;
    // React.FormEvent<HTMLFormElement
    const userData = {
      userName: userTarget.userName.value,
      password: userTarget.password.value,
    };
    console.log(userData);
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
