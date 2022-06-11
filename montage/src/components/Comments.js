/* this is the area that display comments, including comments and ratings */
import {useSelector, useDispatch} from 'react-redux';
import {useState} from "react";
import {addComment} from "../actions";
import "./style/comments.css"

export default function Comments() {
    const commentsContent = useSelector(state => state.comments)
    const dispatch = useDispatch()
    const comments = commentsContent.map((comment) =>
        <div className= "comment">
            <h3>{comment.user}:</h3>
            <p>{comment.commentContent}</p>
            <p>rate: {comment.rate}</p>
        </div>
    )
    const [commentContent, setCommentContent] = useState("")
    const [commentRate, setCommentRate] = useState(0)
    return(<div>

            <div id = "comment_input">
                <textarea name="commentInput" value ={commentContent} placeholder="..." onChange={(e) => setCommentContent(e.target.value)}/><br/>
                <button id="rate">rate:{commentRate}</button>
                <button id = "comment_button" onClick={() => {if(commentContent !== "") dispatch(addComment(handleAddComment(commentContent, commentRate))); setCommentContent("")}}>comment</button>
                <div id= "rate_button">
                    <button onClick={() => {if(commentRate < 10) setCommentRate(commentRate+1)}}>+</button><br/>
                    <button onClick={() => {if(commentRate > 0) setCommentRate(commentRate-1)}}>-</button>
                </div>
            </div>
            <div id = "comments_frame">
                <div id="comments">
                    {comments}
                </div>
            </div>
        </div>
)
}

function handleAddComment(commentContent, commentRate){
    return  {user: "default user", commentContent: commentContent, rate: commentRate}
}