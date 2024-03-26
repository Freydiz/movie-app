import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  overview: string;
}

export const MovieDetailPage: React.FC = () => {
  const { id } = useParams<string>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }

      const data = await response.json();

      setMovie(data);
    };

    if (id) fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};
