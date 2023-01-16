export interface User {
  userName: string;
  password: string;
}

export interface InputProps {
  name: string;
  label: string;
  type?: "password" | "email";
  ref?: string;
}
