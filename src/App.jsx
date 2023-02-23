import React, { memo, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import routes from './router';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

const App = memo(() => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
