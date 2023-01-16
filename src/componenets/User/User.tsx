import React from "react";
import Input from "./Input";

function User() {
  return (
    <div>
      <form>
        <Input
        // Ref={emailInputRef}
        // id="email"
        // label="E-Mail"
        // type="email"
        // value={value}
        // onChange={emailChangeHandler}
        />
        <Input
        // ref={passwordInputRef}
        // id="password"
        // label="Password"
        // type="password"
        // value={value}
        // onChange={passwordChangeHandler}
        />
      </form>
    </div>
  );
}

export default User;
