let visibility = {
    login: "none",
    movies: "none",
    movieInfo: "none"
}

const navbar = (initialState = visibility, action) => {
    switch(action.type) {
        case 'OpenLogin':
            return {...initialState, login: "block"};
        case 'OpenMovies':
            return {...initialState, movies: "block"};
        case 'CloseMovies':
            return {...initialState, movies: "none"};
        case 'OpenMoviesInfo':
            return {...initialState, movieInfo: "block"};
        case 'CloseMoviesInfo':
            return {...initialState, movieInfo: "none"};
        default:
            return initialState;
    }
};

export default navbar;