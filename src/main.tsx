import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/Home.tsx";
import FAQ from "./pages/FAQ/FAQ.tsx";
import Activities from "./pages/Activities/Activities.tsx";
import ActivityCreation from "./pages/Activities/Components/ActivityPosts/ActivityCreation.tsx";
import Updates from "./pages/Updates/Updates.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Login from "./pages/Login/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.tsx";
import { AuthProvider } from "./Context/AuthContext.tsx";

// Declare window properties for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Function to dynamically load Google Analytics script
const loadGoogleAnalytics = () => {
  const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

  if (GA_ID) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      window.gtag("js", new Date());
      window.gtag("config", GA_ID);
    };
  }
};

// Call the function to load Google Analytics script
loadGoogleAnalytics();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="updates" element={<Updates />} />
              <Route path="about" element={<About />} />
              <Route path="activities" element={<Activities />}>
                <Route path="create" element={<ActivityCreation />} />
              </Route>
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
