import React, { ChangeEvent } from "react";
import Input from "./Input";
import { User } from "../../types/User";
import "./UserForm.scss";

const UserForm = () => {
  const [userName, setUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="signin">
      <form onSubmit={onSubmit}>
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={onChangeUserName}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={onChangePassword}
        />
        <button className="login-button" type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
