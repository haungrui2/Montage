const commentsI = []
const comments = (comments = commentsI,action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return comments.concat(action.payload);
        case 'DELETE_COMMENT':
            return [
                ...comments.slice(0,action.payload),
                ...comments.slice(action.payload+1)
            ];
        default:
            return comments;
    }
}
export default comments;