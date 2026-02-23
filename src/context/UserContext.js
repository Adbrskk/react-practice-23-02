import React, { createContext, useMemo, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState({ login: "", email: "" });
  const [isRegistered, setIsRegistered] = useState(false);

  const loginUser = (data) => {
    setUser({
      login: data.login,
      email: data.email,
    });
    setIsRegistered(true);
  };

  const logoutUser = () => {
    setUser({ login: "", email: "" });
    setIsRegistered(false);
  };

  const value = useMemo(
    () => ({
      user,
      isRegistered,
      loginUser,
      logoutUser,
    }),
    [user, isRegistered]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}