import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from '../services';

interface Movie {
  id: number;
  title: string;
  overview: string;
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
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};
