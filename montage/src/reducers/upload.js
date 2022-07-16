let movieInformation = {
    MovieTitle: "",
    MovieYear: 2000,
    MovieDirector: "",
    MovieWriter: "",
    MovieGenre: [],
    MovieDescription: "",
    movieId: "",
    imageData: ""
}

const upload = (initialState = movieInformation, action) => {
    switch(action.type) {
        case 'OnChangeMovieTitle':
            return {...initialState, MovieTitle: action.payload};
        case 'OnChangeMovieYear':
            return {...initialState, MovieYear: action.payload};
        case 'OnChangeMovieDirector':
            return {...initialState, MovieDirector: action.payload};
        case 'OnChangeMovieWriter':
            return {...initialState, MovieWriter: action.payload};
        case 'OnChangeMovieDescription':
            return {...initialState, MovieDescription: action.payload};
        case 'OnChangeMovieId':
            return {...initialState, movieId: action.payload};
        case 'OnChangeMovieImage':
            return {...initialState, imageData: action.payload};
        case 'OnChangeMovieGenre':
            let findIndex = initialState.MovieGenre.indexOf(action.payload);
            if (findIndex !== -1) {
                return {...initialState, MovieGenre: [...initialState.MovieGenre.slice(0, findIndex), ...initialState.MovieGenre.slice(findIndex+1)]};
            } else {
                return {...initialState, MovieGenre: initialState.MovieGenre.concat(action.payload)};
            }
        default:
            return initialState;
    }
};



export default upload;