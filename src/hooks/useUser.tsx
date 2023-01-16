import { useState } from "react";
import { UserContext } from "../context/User-context";
import { User } from "../types/User";

export const useUser = () => {
  const [user, setUser] = useState(null);

  return { user, setUser };
};
