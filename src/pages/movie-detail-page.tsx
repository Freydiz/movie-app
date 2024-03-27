import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from '../services';
import styled from 'styled-components';

interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
}

export const MovieDetailPage: React.FC = () => {
  const { id } = useParams<string>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        try {
          const movieId = parseInt(id);
          if (!isNaN(movieId)) {
            const data = await movieService.fetchMovieDetails(movieId);
            setMovie(data);
          } else {
            console.error('Invalid movie ID:', id);
          }
        } catch (error) {
          console.error('Failed to fetch movie details:', error);
        }
      }
    };

    fetchDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Root>
      <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
      <Column>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
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
