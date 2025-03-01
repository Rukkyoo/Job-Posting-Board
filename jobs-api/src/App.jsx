import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./frontendAuth/landing";
import Register from "./frontendAuth/register";
import Login from "./frontendAuth/login"; 
import Jobs from "./frontendAuth/Jobs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
