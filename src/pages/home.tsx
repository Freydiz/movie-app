import { Search, SearchResult } from '../components';
import { useState } from 'react';
import styled from 'styled-components';
import { movieService } from '../services';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query: string) => {
    if (!query) return;
    const results = await movieService.fetchMovies(query);
    setMovies(results);
  };

  return (
    <Root>
      <Search onSearch={handleSearch} />

      <SearchResult movies={movies} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
