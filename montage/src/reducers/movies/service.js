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

  const addMovie = async (movie) => {
    const response = await fetch('http://localhost:3001/movies/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    return data;
  };

  export default {
    getMovies,
    getMovie,
    addMovie
  };