import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useMoviesList } from '../../contexts';

export const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';
  const [inputValue, setInputValue] = useState(initialQuery);
  const { fetchMovies, setMovies } = useMoviesList();

  // Update input field and perform search if there's a query in the URL
  useEffect(() => {
    if (initialQuery) {
      fetchMovies(initialQuery).catch((error) => {
        console.error('Error fetching movies:', error);
        setMovies([]);
      });
    } else {
      setMovies([]);
      if (inputValue.length > 3) {
        setInputValue('');
      }
    }
  }, [initialQuery, fetchMovies, setMovies]);

  const handleInputChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setInputValue(query);

      if (query.length >= 3) {
        try {
          await fetchMovies(query);
          setSearchParams({ search: query }); // Update the URL with the search term
        } catch (error) {
          console.error('Error fetching movies:', error);
          setMovies([]);
        }
      } else {
        setMovies([]);
        setSearchParams({}); // Clear search parameters from URL
      }
    },
    [fetchMovies, setMovies, setSearchParams],
  );

  const handleInputBlur = useCallback(() => {
    if (inputValue.length > 0 && inputValue.length < 3) {
      setInputValue(''); // Clear input value if less than 3 characters
    }
  }, [inputValue]);

  return (
    <Form>
      <Input
        type="text"
        value={inputValue}
        placeholder="Search for movies..."
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
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
