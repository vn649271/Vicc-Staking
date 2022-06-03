import "./styles/tailwind.css";
import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppcontextProvider } from "./context/AppContext";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
  <AppcontextProvider>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </AppcontextProvider>,
  rootElement
);
