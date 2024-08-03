import React from "react";
import { Routes, Route } from "react-router-dom";
import { Browse, Login } from "./index";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default Body;
