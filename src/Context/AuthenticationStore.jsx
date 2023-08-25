import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

export let AuthenticationContext = createContext(null);
export default function AuthenticationContextProvider(props) {
  const [userData, setUserData] = useState(null);
  let saveUserData = () => {
    let encodeToken = localStorage.getItem("token");
    let decodeToken = jwtDecode(encodeToken);
    setUserData(decodeToken);
  };
  let logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    return <Navigate to="/" />;
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        userData,
        logout,
        saveUserData,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}
