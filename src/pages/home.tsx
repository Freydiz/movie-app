import { Search, SearchResult } from '../components';
import styled from 'styled-components';
import { useMoviesList } from '../contexts';
import { useEffect } from 'react';
import { useDebounce } from '../hooks';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get('search') || '';

  const debouncedQuery = useDebounce(query, 500);
  const { fetchMovies } = useMoviesList();

  useEffect(() => {
    if (debouncedQuery) {
      fetchMovies(debouncedQuery);
    }
  }, [debouncedQuery, fetchMovies]);

  return (
    <Root>
      <Search />
      <SearchResult />
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
