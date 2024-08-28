import React, { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
function Welcome() {
  const [cookieValue, setCookieValue] = useState("");
  const { isAuthenticated, checkAuthStatus } = useAuth();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(";").shift());
    }
    return null;
  }
  useEffect(() => {
    checkAuthStatus();
    const userData = getCookie("userData");
    // console.log("I got the cookie " + userData);
    if(userData){
      const data = JSON.parse(userData);
      setCookieValue(data.name);
    }
    // console.log(data);
    // console.log(userData);
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <>
          <div>
            <h1>Application 2</h1>
            <h3>Welcome : {cookieValue} </h3>
            {/* <a href="/profile">See your Profile</a> */}
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>You have to be logged in to your account</h1>
            <a href="/">Login</a>
          </div>
        </>
      )}
    </>
  );
}

export default Welcome;
