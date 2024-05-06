import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <>
      <Navbar />
    <Dashboard/>
    </>
  );
};

export default App;
