import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MovieDetailsProvider, MoviesListProvider } from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MoviesListProvider>
      <MovieDetailsProvider>
        <App />
      </MovieDetailsProvider>
    </MoviesListProvider>
  </React.StrictMode>,
);
