import { useState } from "react";
import { User } from "../types/User";

export const useUser = () => {
  const [user, setUser] = useState<string | null | User>("");

  return { user, setUser };
};
