import React, { memo } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

const App = memo(() => {
  return (
    <div className="app">
      <header className="header">
        <AppHeader />
      </header>
      <div className="page">{useRoutes(routes)}</div>
      <footer className="footer">
        <AppFooter></AppFooter>
      </footer>
    </div>
  );
});

export default App;
