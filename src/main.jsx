import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import { Analytics } from "@vercel/analytics/react"

import App from "./App";
import AOS from "aos";

import "./index.css";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <BrowserRouter>
      <Flowbite theme={{ mode: 'dark' }}>
        <App />
      </Flowbite>
    </BrowserRouter>
  </React.StrictMode>,
);
