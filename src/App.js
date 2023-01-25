import React, { memo } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";

const App = memo(() => {
  return (
    <div className="app">
      <header className="header">Header</header>
      <div className="page">{useRoutes(routes)}</div>
      <footer className="footer">Footer</footer>
    </div>
  );
});

export default App;
