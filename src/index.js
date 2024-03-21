import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoutes from './routes';
import GlobalStyle from './globalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllRoutes />
    <GlobalStyle />
  </React.StrictMode>
);

