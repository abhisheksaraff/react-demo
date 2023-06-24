import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //npm i react-router-dom
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <div className="navbar">
        <Link to="/">App</Link>
        <br/>
        <Link to="/profile">Profile</Link>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
