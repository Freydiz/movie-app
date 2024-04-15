import { Search, SearchResult } from '../components';
import styled from 'styled-components';

export const Home = () => {
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
