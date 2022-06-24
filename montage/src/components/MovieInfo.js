/* This is the page for movie information, including movie name, the poster,
rating, director, writer, genre, and description */
import {useSelector} from 'react-redux';
import "./style/movieInfo.css"
import Comments from "./Comments";

export default function MovieInfo() {
    const visibility = useSelector(state => state.others.navbar);
    const movie = useSelector(state => state.movies.selectedMovie);
    const comments = useSelector(state => state.comments.moviesComments);
    const movieRate = comments.totalRate/comments.commentList.length


    return (
        <div className = "MovieInfo" style={{display: visibility.movieInfo}}>
            <div className = "MovieInfoContainer">
                <div className="TitleYearContainer">
                    <p className = "MovieInfoTitle">{movie.MovieTitle}</p>
                    <p className = "MovieInfoYear">{movie.MovieYear}</p>
                </div>
                <img className = "MovieInfoPoster" src={"http://localhost:3001/images/" + movie.src} alt="poster"/>
                <div className = "GeneralInfoContainer">
                    <p className = "MovieInfoDirector">Director: {movie.MovieDirector}</p>
                    <p className = "MovieInfoWriter">Writer: {movie.MovieWriter}</p>
                    <p className = "MovieInfoGenre">Genre: {movie.MovieGenre}</p>
                </div>

                <p className = "MovieInfoRating">{movieRate} / 10 ★</p>
                <p className = "MovieInfoDescription">Movie Description: {movie.MovieDescription}</p>
            </div>
            <Comments/>
        </div>
    )
}