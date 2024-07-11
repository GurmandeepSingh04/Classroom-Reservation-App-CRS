import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(() => ({
    loggedIn: null,
  }));

  useEffect(() => {
    fetch("http://localhost:3000/user/user/user", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        console.log({ ...data });
        setUser({ ...data });
      });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
