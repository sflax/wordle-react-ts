import { useState } from "react";
import { User } from "../types/User";

export const useUser = () => {
  const [user, setUser] = useState<User>({
    userName: "",
    password: "",
  });

  return { user, setUser };
};
