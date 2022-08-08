import {useSelector, useDispatch} from 'react-redux';
import {useState} from "react";
import "./style/comments.css"
import {addCommentAsync, deleteCommentAsync} from "../reducers/comments/thunks";

export default function Comments() {
    const comments = useSelector(state => state.comments.moviesComments)
    const dispatch = useDispatch()
    const selectedMovie = useSelector(state => state.movies.selectedMovie)
    const movieId = selectedMovie.movieId
    const userId = useSelector(state => state.persistReducer.userIdReducer);
    const userPreference = useSelector(state => state.persistReducer.userPreference);
    const [commentContent, setCommentContent] = useState("")
    const [commentRate, setCommentRate] = useState(0)
    let isAbleToComment = commentContent !== "";

    const commentsDisplay = comments.commentList.map((comment, index) => {
            isAbleToComment = isAbleToComment && (userId.uid !== comment.userId)
            return (
                <div className="comment">
                    <button className="delete_comment_button" onClick={() => {
                        dispatch(deleteCommentAsync({index: index, movieId: movieId}))
                    }} style={{display: comment.userId === userId.uid ? "block" : "none"}}>Delete
                    </button>
                    <div>
                        <h3>{comment.user}:</h3>
                        <p>{comment.commentContent}</p>
                        <p>{comment.rate}/10 ★</p>
                    </div>
                </div>)
        }
    )

    return (
        <div id="movie_comment">
            <div id="comment_input" style={{display: userId.isLogin ? "block" : "none"}}>
          <textarea name="commentInput" value={commentContent} placeholder="Comments on Movie!"
                    onChange={(e) => setCommentContent(e.target.value)}/><br/>
                <div id="rate_button">
                    <button className="plus_btn" onClick={() => {
                        if (commentRate < 10)
                            setCommentRate(commentRate + 1)
                    }}>
                        +
                    </button>
                    <button className="minus_btn" onClick={() => {
                        if (commentRate > 0)
                            setCommentRate(commentRate - 1)
                    }}>
                        -
                    </button>
                </div>
                <button id="rate">rate:{commentRate}/10 ★</button>
                <button id="comment_button" onClick={() => {
                    if (isAbleToComment)
                        dispatch(addCommentAsync({
                            commentsContent: {
                                userId: userId.uid,
                                user: userPreference.fullName,
                                commentContent: commentContent, rate: commentRate
                            },
                            movieId: movieId
                        }));
                    setCommentContent("")
                }}>
                    comment
                </button>
            </div>
            <div id="comments_frame">
                <div id="comments">
                    {commentsDisplay}
                </div>
            </div>
        </div>
    )
}
