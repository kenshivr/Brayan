import "./index.css";
import "./styles/fonts.css";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-dark-teal/theme.css";

import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import './i18n';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Brayan">
    <App />
  </BrowserRouter>
);
