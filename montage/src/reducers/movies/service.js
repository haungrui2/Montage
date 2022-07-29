const getMovies = async (input) => {
  console.log(input)
  let query = '';
  if (input) {
    query = input;
  }
    const response = await fetch('http://localhost:3001/movies' + query, {
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

  const editMovie = async (movie) => {
    const response = await fetch('http://localhost:3001/movies/', {
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

  const editFavouriteMovie = async (editData) => {
    const response = await fetch('http://localhost:3001/users/editFavouriteMovies', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editData)
    });
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    return data;
  };

  const recommendMovie = async (userId) => {
    const response = await fetch('http://localhost:3001/users/recommend', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userId)
    });
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    return data;
  };



let Movieservices = {
    getMovies,
    getMovie,
    addMovie,
    editMovie,
    editFavouriteMovie,
    recommendMovie
  };

export default Movieservices;