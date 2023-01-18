import React from "react";
import Input from "../UI/Input";
import { User } from "../../types/User";
import Button from "../UI/Button";
import "./UserForm.scss";
import { UserContext } from "../../context/User-context";
import { Navigate, useNavigate } from "react-router-dom";

const UserForm = () => {
  // const navigate = useNavigate;
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // navigate("/wordle-game");
  };
  return (
    <div>
      <form className="userForm" onSubmit={onSubmitHandler}>
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
