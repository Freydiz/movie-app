import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card';
import { useMoviesList } from '../../contexts';
import styled from 'styled-components';

export const SearchResult: React.FC = () => {
  const { movies } = useMoviesList();

  const itemsPerPage = 10;
  const [itemsDisplayed, setItemsDisplayed] = useState(itemsPerPage);

  // Reset itemsDisplayed when movies change
  useEffect(() => {
    setItemsDisplayed(itemsPerPage);
  }, [movies]);

  // Calculate the currently displayed items
  const displayedMovies = useMemo(() => movies.slice(0, itemsDisplayed), [itemsDisplayed, movies]);

  const handleLoadMore = () => {
    setItemsDisplayed((current) => current + itemsPerPage);
  };

  return (
    <>
      <Grid>
        {displayedMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </Grid>
      {itemsDisplayed < movies.length && <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>}
    </>
  );
};

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (min-width: 993px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    display: flex;
  }

  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
