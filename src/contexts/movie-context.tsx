import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { movieService } from '../services';

interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  poster_path: string;
}

interface MovieContextProps extends PropsWithChildren {}

interface MovieContextValues {
  movies: Movie[];
  selectedMovie: Movie | null;
  fetchMovies: (query: string) => Promise<void>;
  fetchMovieDetails: (id: number) => Promise<void>;
}

export const MoviesContext = createContext<MovieContextValues>({} as MovieContextValues);

export const MoviesProvider: React.FC<MovieContextProps> = (props) => {
  const { children } = props;

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchMovies = async (query: string) => {
    try {
      const results = await movieService.fetchMovies(query);

      setMovies(results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      setMovies([]);
    }
  };

  const fetchMovieDetails = async (id: number) => {
    try {
      const details = await movieService.fetchMovieDetails(id);

      setSelectedMovie(details);
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
      setSelectedMovie(null);
    }
  };

  return (
    <MoviesContext.Provider value={{ movies, selectedMovie, fetchMovies, fetchMovieDetails }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
