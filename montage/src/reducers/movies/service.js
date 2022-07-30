const getMovies = async (input) => {
  console.log(input)
  let query = '';
  if (input) {
    query = input;
  }
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/movies' + query, {
      method: 'GET'
    });
    return response.json();
  };

const getMovie = async (movie) => {
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/movies/' + movie, {
      method: 'GET'
    });
    return response.json();
  };

const addMovie = async (movie) => {
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/movies/', {
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

const editMovie = async (movie) => {
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/movies/', {
      method: 'PUT',
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

const getRandomMovie = async () => {
    const response = await fetch('https://cpsc455montageserver.herokuapp.com/movies/random', {
      method: 'GET'
    });
    return response.json();
};


let Movieservices = {
    getMovies,
    getMovie,
    addMovie,
    editMovie,
    getRandomMovie
  };

export default Movieservices;
