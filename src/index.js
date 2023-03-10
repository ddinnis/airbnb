import ReactDOM from 'react-dom/client';
import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './assets/css/index.less';
import 'normalize.css';
import store from './store';
import { lightTheme } from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback="loading...">
      <ThemeProvider theme={lightTheme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  // </React.StrictMode>
);
