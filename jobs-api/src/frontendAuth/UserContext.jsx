// UserContext.js
import React, { createContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Export only the provider component and the context
export { UserProvider, UserContext };