import React from "react";
import ReactDOM from "react-dom/client";
import "./design/output.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Thoughts from "./Thoughts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
