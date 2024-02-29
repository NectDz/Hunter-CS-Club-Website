import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/Home.tsx";
import FAQ from "./pages/FAQ/FAQ.tsx";
import Activities from "./pages/Activities/Activities.tsx";
import Update from "./pages/Update/Update.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Login from "./pages/Login/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.tsx";

import { AuthProvider } from "./Context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="update" element={<Update />} />
              <Route path="about" element={<About />} />
              <Route path="activities" element={<Activities />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
