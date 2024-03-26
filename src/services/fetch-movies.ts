export const fetchMovies = async (searchQuery: string) => {
  try {
    const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&include_adult=false&language=en-US`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    return [];
  }
};
