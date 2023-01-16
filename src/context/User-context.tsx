import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  //these two are dummy functions
  onLogout: () => {},
  // onLogin: (userName, password) => {},
});

export const AuthContextProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        // onLogin: loginHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
