import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./assets/css/index.less";
import "normalize.css";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
