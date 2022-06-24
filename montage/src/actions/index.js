export const OpenLogin = visibility => {
    return {
        type: 'OpenLogin',
        payload: visibility
    };
}

export const OpenMovies = visibility => {
    return {
        type: 'OpenMovies',
        payload: visibility
    };
}

export const CloseMovies = visibility => {
    return {
        type: 'CloseMovies',
        payload: visibility
    };
}

export const OpenMoviesInfo = visibility => {
    return {
        type: 'OpenMoviesInfo',
        payload: visibility
    };
}

export const CloseMoviesInfo = visibility => {
    return {
        type: 'CloseMoviesInfo',
        payload: visibility
    };
}