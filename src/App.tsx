import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Home, MovieDetailPage } from './pages';
import { MovieDetailsProvider } from './contexts';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie/:id"
            element={
              <MovieDetailsProvider>
                <MovieDetailPage />
              </MovieDetailsProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
