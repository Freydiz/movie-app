import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useMoviesList } from '../../contexts';

export const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { fetchMovies, setMovies } = useMoviesList();

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setInputValue(query);

      if (query.length >= 3) {
        try {
          await fetchMovies(query);

          window.history.pushState({}, '', `/?search=${query}`);
        } catch (error) {
          console.error('Error fetching movies:', error);
          setMovies([]);
        }
      }
    },
    [fetchMovies, setMovies],
  );

  return (
    <Form>
      <Input type="text" value={inputValue} placeholder="Search for movies..." onChange={handleInputChange} />
    </Form>
  );
};

const Form = styled.form`
  width: 100%;

  @media (min-width: 993px) {
    width: 500px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid;
`;
