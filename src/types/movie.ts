export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  poster_path: string;
}

export interface MoviesFetchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
