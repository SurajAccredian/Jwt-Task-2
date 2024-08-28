import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  console.log("The status of authentication is " + isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;

  //   console.log("protected route hit", isAuthenticated);
  // if (loading) {
  //   return (
  //     <Backdrop
  //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open={loopen}
  //     >
  //       <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
  //         <CircularProgress />
  //       </Box>
  //     </Backdrop>
  //   );
  // }
}

export default ProtectedRoute;
