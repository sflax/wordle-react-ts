import React, {
  useReducer,
  useState,
  useContext,
  useEffect,
  useRef,
  FormEvent,
  ChangeEventHandler,
} from "react";
import Input from "./Input";
import { User } from "../../types/User";
import "./UserForm.scss";
import { UserContext } from "../../context/User-context";

// const userNameReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length > 0 };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.trim().length > 0 };
//   }
//   return { state: "", isValid: false };
// };

// const passwordReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.trim().length > 6 };
//   }
//   return { state: "", isValid: false };
// };

const UserForm = () => {
  // const [formIsValid, setFormIsValid] = useState(false);

  // const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
  //   value: "",
  //   isValid: null,
  // });
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
  //   value: "",
  //   isValid: null,
  // });

  // const userCtx = useContext(UserContext);

  // const userNameInputRef = useRef();
  // const passwordInputRef = useRef();

  // const { isValid: userNameIsValid } = userNameState;
  // const { isValid: passwordIsValid } = passwordState;

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Checking form validity!");
  //     setFormIsValid(userNameIsValid && passwordIsValid);
  //   }, 500);

  //   return () => {
  //     console.log("CLEANUP");
  //     clearTimeout(identifier);
  //   };
  // }, [userNameIsValid, passwordIsValid]);

  // const userNameChangeHandler = (event:key) => {
  //   dispatchUserName({ type: "USER_INPUT", val: event.target.value });
  // };

  // const passwordChangeHandler = (event) => {
  //   dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  // };

  // const validateUserNameHandler = () => {
  //   dispatchUserName({ type: "INPUT_BLUR" });
  // };

  // const validatePasswordHandler = () => {
  //   dispatchPassword({ type: "INPUT_BLUR" });
  // };

  // const submitHandler = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (formIsValid) {
  //     userCtx.onLogin(userNameState.value, passwordState.value);
  //   } else if (!userNameIsValid) {
  //     //it's not the standard focus - see Input comp.
  //     userNameInputRef.current.focus();
  //   } else {
  //     passwordInputRef.current.focus();
  //   }
  // };

  const [userName, setUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const userNameChangeHandler = (event: any) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandler = (event: any) => {
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
          // ref={userNameInputRef}
          id="userName"
          // label="userName"
          type="userName"
          // isValid={userNameIsValid}
          // value={userNameState.value}
          onChange={userNameChangeHandler}
          // onBlur={validateUserNameHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          // ref={passwordInputRef}
          id="password"
          // label="Password"
          type="password"
          // isValid={passwordIsValid}
          // value={passwordState.value}
          onChange={passwordChangeHandler}
          // onBlur={validatePasswordHandler}
        />
        <button className="login-button" type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
