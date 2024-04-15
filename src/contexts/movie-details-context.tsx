import { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';
import { movieService } from '../services';
import { Movie } from '../types';

interface MovieDetailsContextProps extends PropsWithChildren {}

interface MovieDetailsContextValues {
  selectedMovie: Movie | null;
  clearSelectedMovie: () => void;
  fetchMovieDetails: (id: number) => Promise<void>;
}

export const MovieDetailsContext = createContext<MovieDetailsContextValues>({} as MovieDetailsContextValues);

export const MovieDetailsProvider: React.FC<MovieDetailsContextProps> = (props) => {
  const { children } = props;

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchMovieDetails = useCallback(async (id: number) => {
    try {
      const details = await movieService.fetchMovieDetails(id);

      setSelectedMovie(details);
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
      setSelectedMovie(null);
    }
  }, []);

  const clearSelectedMovie = useCallback(() => setSelectedMovie(null), []);

  return (
    <MovieDetailsContext.Provider value={{ selectedMovie, fetchMovieDetails, clearSelectedMovie }}>
      {children}
    </MovieDetailsContext.Provider>
  );
};

export const useMovieDetails = () => useContext(MovieDetailsContext);
