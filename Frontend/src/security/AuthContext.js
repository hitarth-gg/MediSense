// Create a context
// put some state in the context
// share the created context with other components

import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // creating a custom hook

export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(0);
  const [isAuthenticated, setAuthenticated] = useState(false);

  function access() {
    setAuthenticated(true);
    console.log("accessed");
    return true;
  }
  function printAccess() {
    console.log("accessed: " + isAuthenticated);
  }

//   // Authentication Logic
//   function login(username, password) {
//     if (username === "in28minutes" && password === "123") {
//       setAuthenticated(true);
//       return true;
//     } else {
//       setAuthenticated(false);
//       return false;
//     }
//   }

  

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ number, isAuthenticated, setAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}
