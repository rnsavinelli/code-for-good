import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/session/Login";
import Card from "./pages/Card";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/session/SignUp";
import Profile from "./pages/session/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
