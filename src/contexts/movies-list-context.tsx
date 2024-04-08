import { PropsWithChildren, createContext, useState, useContext, useCallback } from 'react';
import { movieService } from '../services';
import { Movie } from '../types';

interface MoviesListContextProps extends PropsWithChildren {}

interface MoviesListContextValues {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  fetchMovies: (query: string) => Promise<void>;
}

export const MoviesListContext = createContext<MoviesListContextValues>({} as MoviesListContextValues);

export const MoviesListProvider: React.FC<MoviesListContextProps> = (props) => {
  const { children } = props;

  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = useCallback(async (query: string) => {
    try {
      const results = await movieService.fetchMovies(query);

      setMovies(results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      setMovies([]);
    }
  }, []);

  return <MoviesListContext.Provider value={{ movies, setMovies, fetchMovies }}>{children}</MoviesListContext.Provider>;
};

export const useMoviesList = () => useContext(MoviesListContext);
