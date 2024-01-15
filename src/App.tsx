import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
