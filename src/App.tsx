import { useState } from "react";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css"; // Make sure this CSS doesn't introduce extra margins or paddings
import { theme } from "./theme.tsx";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container
        maxWidth={false}
        disableGutters // This prop removes padding from the Container component
        sx={{
          margin: 0,
          padding: 0,
          width: "100vw", // Full viewport width

          position: "relative", // This ensures the Container is positioned relative to the viewport
          "& > .outlet-container": {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <div className="outlet-container">
          <Outlet />
        </div>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
