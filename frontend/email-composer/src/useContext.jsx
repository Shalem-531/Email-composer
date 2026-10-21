import { createContext, useContext, useState } from "react";
const EmailContext = createContext();
export function EmailProvider({ children }) {
  const [email, setEmail] = useState({
    to: "",
    body: ""
  });

  return (
    <EmailContext.Provider value={{email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
}

export const useEmail = () => useContext(EmailContext);