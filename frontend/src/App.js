import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard.js";
import Login from "./admin/auth/Login.js";
import MainPage from "./guests/pages/MainPage.js";
import "flowbite/dist/flowbite.min.css";

function ProtectedRoute({ element: Element }) {
  const isAuthenticated =
    localStorage.getItem("token") && localStorage.getItem("userData");

  return isAuthenticated ? <Element /> : <Navigate to="/admin/login" replace />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute element={Dashboard} />}
        />
        <Route path="/invitation/:token" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
