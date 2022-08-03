let initialState = {
  movies: []
}

const userMovie = ( state=initialState, action ) => {
  switch(action.type) {
    case "getMovies" :
      return {
        movies: action.payload
      };
    default:
        return state;
    }
}

export default userMovie;
