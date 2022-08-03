let preference = {
    fullName: "",
    favouriteMovies: []
}

const userPreference = (initialState = preference, action) => {
    switch(action.type) {
        case 'addFavouriteMovie':
            let findIndex = initialState.favouriteMovies.indexOf(action.payload);
            if (findIndex !== -1) {
                return {...initialState, favouriteMovies: [...initialState.favouriteMovies.slice(0, findIndex), ...initialState.favouriteMovies.slice(findIndex+1)]};
            } else {
                return {...initialState, favouriteMovies: initialState.favouriteMovies.concat(action.payload)};
            }
        case 'getUserData':
            return {...initialState, favouriteMovies: action.payload.favoriteMovies, fullName: action.payload.fullName};
        default:
            return initialState;
    }
};

export default userPreference;