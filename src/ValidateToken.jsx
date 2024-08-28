import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "./hooks/useAuth";
import Cookies from "js-cookie";

function ValidateToken() {
  const { isAuthenticated, checkAuthStatus } = useAuth();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  // function setCookie(name, value, hours) {
  //   let expires = "";
  //   if (hours) {
  //     const date = new Date();
  //     date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  //     expires = `; expires=${date.toUTCString()}`;
  //   }
  //   document.cookie = `${name}=${encodeURIComponent(
  //     JSON.stringify(value)
  //   )}${expires}; path=/;`;
  // }

  useEffect(() => {
    console.log("THis was called");
    if (token) {
      const options = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: token,
        },
      };

      axios
        .post(
          `https://accredian-backend-v1-image-7dra35jwyq-uc.a.run.app/verifyToken/token`,
          options
        )
        .then((response) => {
          if (response.data.status === 200) {
            // const { data } = response.data;
            // const { firstname } = data;
            // setCookie("userData");
            checkAuthStatus();
            // window.location.href= ""
            window.location.href = "https://jwt-task-2.vercel.app/welcome";
          } else {
            console.log("Invalid token");
            window.location.href = "https://jwt-task-2.vercel.app/";
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
        });
    }
  }, [token]);

  return <div></div>;
}

export default ValidateToken;
