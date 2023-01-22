export interface User {
  userName: string;
  password: string;
}

export interface InputProps {
  className: string;
  id: string;
  type: string | "password" | "email";
  placeholder: string;
}

export interface LoginProps {
  showLoginModal: boolean;
  onClose: () => void;
}
