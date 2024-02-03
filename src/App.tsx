import { useState } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Footer from "./Components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css"; // Make sure this CSS doesn't introduce extra margins or paddings
import { theme } from "./theme.tsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
