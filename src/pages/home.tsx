import { Search, SearchResult } from '../components';
import styled from 'styled-components';
import { useMovies } from '../contexts';

export const Home = () => {
  const { fetchMovies } = useMovies();

  const handleSearch = async (query: string) => {
    if (!query) return;
    await fetchMovies(query);
  };

  return (
    <Root>
      <Search onSearch={handleSearch} />
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
