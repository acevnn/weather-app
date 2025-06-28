import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "@styles/index.scss";
import { WeatherProvider } from "@components/context/WeatherContet.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
);
