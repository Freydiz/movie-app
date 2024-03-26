export const fetchMovies = async (searchQuery: string) => {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7741135f64976e07481862591cde71c2&query=${searchQuery}&include_adult=false&language=en-US&page=1`;
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
