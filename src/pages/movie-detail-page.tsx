import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useMovieDetails } from '../contexts';

export const MovieDetailPage: React.FC = () => {
  const { id } = useParams<string>();
  const { selectedMovie, fetchMovieDetails, clearSelectedMovie } = useMovieDetails();

  useEffect(() => {
    if (id) {
      const movieId = parseInt(id);
      if (!isNaN(movieId)) fetchMovieDetails(movieId);
    }
  }, [id, fetchMovieDetails]);

  useEffect(() => clearSelectedMovie, [clearSelectedMovie]);

  if (!selectedMovie) return <div>Loading...</div>;

  return (
    <Root>
      <Image src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`} alt={selectedMovie.title} />
      <Column>
        <h1>{selectedMovie.title}</h1>
        <p>{selectedMovie.overview}</p>
      </Column>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  gap: 16px;
`;

const Image = styled.img`
  width: auto;
  height: 300px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
