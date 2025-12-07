import { createContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  username: string;
  userId: string;
  token: string;
  role: string;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    username: "",
    userId: "",
    token: "",
    role: "",
    login: () => {},
    logout: () => {}
});