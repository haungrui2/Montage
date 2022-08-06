let searchInformation = {
    qucikSearchMovieTitle: "",
    MovieTitle: "",
    MovieYear: '',
    MovieGenre: [],
    MovieRate: ''
}

const search = (initialState = searchInformation, action) => {
    switch(action.type) {
        case 'DeleteQuickChangeSearchMovieTitle':
            return {...initialState, qucikSearchMovieTitle: ""};
        case 'OnChangeQuickSearchMovieTitle':
            return {...initialState, qucikSearchMovieTitle: action.payload};
        case 'OnChangeSearchMovieTitle':
            return {...initialState, MovieTitle: action.payload};
        case 'OnChangeSearchMovieYear':
            return {...initialState, MovieYear: action.payload};
        case 'OnChangeSearchMovieGenre':
            let findIndex = initialState.MovieGenre.indexOf(action.payload);
            if (findIndex !== -1) {
                return {...initialState, MovieGenre: [...initialState.MovieGenre.slice(0, findIndex), ...initialState.MovieGenre.slice(findIndex+1)]};
            } else {
                return {...initialState, MovieGenre: initialState.MovieGenre.concat(action.payload)};
            }
        case 'OnChangeSearchMovieRate':
            return {...initialState, MovieRate: action.payload};
        default:
            return initialState;
    }
};

export default search;