import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Authentication from "./pages/Authentication/Authentication";
import MachineLearning from "./pages/MachineLearning/MachineLearning";
import Hosting from "./pages/Hosting/Hosting";
import Functions from "./pages/Functions/Functions";
import Database from "./pages/Database/Database";
import Storage from "./pages/Storage/Storage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="authentication" element={<Authentication />} />
      <Route path="database" element={<Database />} />
      <Route path="functions" element={<Functions />} />
      <Route path="hosting" element={<Hosting />} />
      <Route path="machine-learning" element={<MachineLearning />} />
      <Route path="storage" element={<Storage />} />
    </Routes>
  </BrowserRouter>
);
