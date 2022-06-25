let visibility = {
    login: "none",
    movies: "none",
    movieInfo: "none",
    coverPage: "none"
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
        case 'OpenCoverPage':
                return {...initialState, coverPage: "block"};
        case 'CloseCoverPage':
            return {...initialState, coverPage: "none"};
        default:
            return initialState;
    }
};

export default navbar;