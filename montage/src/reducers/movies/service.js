const getMovies = async () => {
    const response = await fetch('http://localhost:3001/movies', {
      method: 'GET'
    });
    return response.json();
  };

const getMovie = async (movie) => {
    const response = await fetch('http://localhost:3001/movies/' + movie, {
      method: 'GET'
    });
    return response.json();
  };

  export default {
    getMovies,
    getMovie
  };