/* this is the area that display comments, including comments and ratings */
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import "./style/comments.css"
import {addCommentAsync, getCommentsAsync} from "../reducers/comments/thunks";

export default function Comments() {
    const comments = useSelector(state => state.comments.moviesComments)
    const dispatch = useDispatch()
    const selectedMovie = useSelector(state => state.movies.selectedMovie)
    const movieId = selectedMovie.movieId
    const user = "default user"

    // useEffect(() => {
    //     dispatch(getCommentsAsync(movieId));
    // }, []);

    const commentsDisplay = comments.commentList.map((comment) =>
        <div className= "comment">
            <h3>{comment.user}:</h3>
            <p>{comment.commentContent}</p>
            <p>rate: {comment.rate}</p>
        </div>
    )
    const [commentContent, setCommentContent] = useState("")
    const [commentRate, setCommentRate] = useState(0)
    return(<div id = "movie_comment">
            <div id = "comment_input">
                <textarea name="commentInput" value ={commentContent} placeholder="..." onChange={(e) => setCommentContent(e.target.value)}/><br/>
                <button id="rate">rate:{commentRate}</button>
                <button id = "comment_button" onClick={() => {if(commentContent !== "") dispatch(
                    addCommentAsync({
                        commentsContent: handleAddComment(user, commentContent, commentRate),
                        movieId: movieId
                    }));
                    setCommentContent("")}}>comment</button>
                <div id= "rate_button">
                    <button onClick={() => {if(commentRate < 10) setCommentRate(commentRate+1)}}>+</button><br/>
                    <button onClick={() => {if(commentRate > 0) setCommentRate(commentRate-1)}}>-</button>
                </div>
            </div>
            <div id = "comments_frame">
                <div id="comments">
                    {commentsDisplay}
                </div>
            </div>
        </div>
)
}

function handleAddComment(user, commentContent, commentRate){
    return  {user: user, commentContent: commentContent, rate: commentRate}
}