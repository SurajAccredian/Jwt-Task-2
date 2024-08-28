import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import ValidateToken from "./ValidateToken";
import Welcome from "./Welcome";
import ProtectedRoute from "./HOC/ProtectedRoute";
ProtectedRoute;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/token" element={<ValidateToken />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
