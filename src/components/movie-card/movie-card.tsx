import styled from 'styled-components';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

interface Props {
  movie: Movie;
}

export const MovieCard: React.FC<Props> = (props) => {
  const { movie } = props;

  return (
    <Root>
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <Column>
        <h3>{movie.title}</h3>
        <Overview>{movie.overview}</Overview>
      </Column>

      <Circle>{movie.vote_average.toFixed(1)}</Circle>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 8px;
  gap: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 144px;
  border-radius: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Overview = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Circle = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #003366;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
