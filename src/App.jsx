import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import Form from "./views/Form";

const App = () => {
  return (
    
    <div className="App cont">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />      
      </Routes>
    </div>
  
  );
};

export default App;
