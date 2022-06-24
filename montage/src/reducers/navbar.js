let visibility = {
    login: "none",
    movies: "none"
}

const navbar = (initialState = visibility, action) => {
    switch(action.type) {
        case 'OpenLogin':
            return {...initialState, login: "block"};
        case 'OpenMovies':
            return {...initialState, movies: "block"};
        default:
            return initialState;
    }
};

export default navbar;