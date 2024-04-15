import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoviesListProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MoviesListProvider>
      <App />
    </MoviesListProvider>
  </React.StrictMode>,
);
