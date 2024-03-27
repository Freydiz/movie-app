import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoviesProvider } from './contexts/movie-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
);
