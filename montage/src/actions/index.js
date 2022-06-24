export const addComment = comment => {
    return {
        type: 'ADD_COMMENT',
        payload: comment
    };
}

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