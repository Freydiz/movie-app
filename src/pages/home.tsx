import { Link } from 'react-router-dom';
import { Search, SearchResult } from '../components';
import { useState } from 'react';
import { fetchMovies } from '../services/fetch-movies';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query: string) => {
    if (!query) return;
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <SearchResult movies={movies} />

      <Link to="details">Movie Details</Link>
    </>
  );
};
