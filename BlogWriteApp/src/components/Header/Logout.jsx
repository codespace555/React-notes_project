import React from "react";
import { useDispatch } from "react-redux";
import  authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import Button from "../Button/Button";



function Logout() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        // Remove user data from state and local storage
        dispatch(logout());
      })
      .catch((error) => console.warn("Error logging out: ", error));
  };
  return <>
<Button btntext={Logout}/>

  </>;
}

export default Logout;
