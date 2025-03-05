import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Language } from "./Context/Language.jsx";

createRoot(document.getElementById("root")).render(
  <Language>
    <App />
  </Language>
);
