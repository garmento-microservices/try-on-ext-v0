import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

window.TryOnExtensionApp = (elementId, props) => {
  const root = ReactDOM.createRoot(document.getElementById(elementId));
  root.render(
    <ThemeProvider>
      <React.StrictMode>
        <App {...(props ?? {})} />
      </React.StrictMode>
    </ThemeProvider>
  );
};

// window.TryOnExtensionApp("root", { designId: "6655d9f9-9fad-43e9-936e-9258bea13815" });
