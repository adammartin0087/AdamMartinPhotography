import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faTrophy } from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";

library.add(faInstagram, faFacebook, faMapMarker, faTrophy);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.register();
