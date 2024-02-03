import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/Home.tsx"; // Import Home
import Events from "./pages/Events/Events.tsx";
import Resources from "./pages/Resources/Resources.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />{" "}
          <Route path="home" element={<Home />} />{" "}
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="resources" element={<Resources />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
