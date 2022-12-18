import { useState, createContext, useContext } from "react";

const LoginAuthContext = createContext(null);

export const LoginAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <LoginAuthProvider value={{ user, login, logout }}>
      {children}
    </LoginAuthProvider>
  );
};

export const useLoginAuth = () => {
    return useContext(LoginAuthContext)
}