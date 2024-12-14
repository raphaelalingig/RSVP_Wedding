import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./admin/auth/Login.js";
import Dashboard from "./admin/pages/Dashboard.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
