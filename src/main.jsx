import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//* STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

//* COMPONENTS
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
