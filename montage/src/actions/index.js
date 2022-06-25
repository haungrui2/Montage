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

export const OpenCoverPage = visibility => {
    return {
        type: 'OpenCoverPage',
        payload: visibility
    };
}

export const CloseCoverPage = visibility => {
    return {
        type: 'CloseCoverPage',
        payload: visibility
    };
}