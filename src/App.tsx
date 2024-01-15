import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
function App() {
  return (
    <>
      <Grid container>
        <Navbar />
        <Outlet />
      </Grid>
    </>
  );
}

export default App;
