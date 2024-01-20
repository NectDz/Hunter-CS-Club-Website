import { useState } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./App.css"; // Make sure this CSS doesn't introduce extra margins or paddings

function App() {
  return (
    <Grid
      container
      direction="column"
      style={{ width: "100vw", height: "100vh", margin: 0 }}
    >
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item xs style={{ padding: "20px", boxSizing: "border-box" }}>
        {" "}
        {/* Adjust padding as needed */}
        <Outlet />
      </Grid>
      <Footer />
    </Grid>
  );
}

export default App;
