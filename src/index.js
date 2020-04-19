import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { faMapMarker, faTrophy } from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarker, faTrophy);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.register();
