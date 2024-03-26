import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
}

interface SearchResultProps {
  movies: Movie[];
}

export const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { movies } = props;
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
