import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useMoviesList } from '../../contexts';

export const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';
  const [inputValue, setInputValue] = useState(initialQuery);
  const { fetchMovies, setMovies } = useMoviesList();

  useEffect(() => {
    if (initialQuery) {
      fetchMovies(initialQuery);
    } else {
      setMovies([]);
    }
  }, [initialQuery, fetchMovies, setMovies]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);

      if (value.length >= 3) {
        fetchMovies(value);
        setSearchParams({ search: value });
      } else {
        setMovies([]);
        setSearchParams({});
      }
    },
    [fetchMovies, setSearchParams, setMovies],
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
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
`;
