import { Movie, MoviesFetchResponse } from '../types';

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const movieService = {
  async fetchMovies(query: string): Promise<Movie[]> {
    try {
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US`;
      const response = await fetch(url);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data: MoviesFetchResponse = await response.json();

      return data.results;
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      throw error;
    }
  },

  async fetchMovieDetails(id: number): Promise<Movie> {
    try {
      const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
      const response = await fetch(url);

      if (!response.ok) throw new Error('Failed to fetch movie details');

      const data: Movie = await response.json();

      return data;
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
      throw error;
    }
  },
};
