import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card';
import { useMoviesList } from '../../contexts';
import styled from 'styled-components';

export const SearchResult: React.FC = () => {
  const { movies } = useMoviesList();

  return (
    <Grid>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </Grid>
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
