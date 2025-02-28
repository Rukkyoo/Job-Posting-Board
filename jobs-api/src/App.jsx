import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./frontendAuth/register.jsx";
import Login from "./frontendAuth/login.jsx";
import Landing from "./frontendAuth/landing.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
