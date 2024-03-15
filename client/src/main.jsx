import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { NextUIProvider } from "@nextui-org/react";
import LocationProvider from "./context/providers/LocationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocationProvider>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </LocationProvider>
);
