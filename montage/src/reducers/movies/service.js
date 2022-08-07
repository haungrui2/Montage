const getMovies = async (input) => {
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

const getRandomMovie = async () => {
    const response = await fetch('http://localhost:3001/movies/random', {
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
