interface Movie {
  id: number;
  title: string;
  // Add any other movie properties you need
}

interface SearchResultProps {
  movies: Movie[];
}

export const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { movies } = props;
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};
