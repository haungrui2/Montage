/* This is the page for movie information, including movie name, the poster,
rating, director, writer, genre, and description */
import {useSelector, useDispatch} from 'react-redux';
import "./style/movieInfo.css"
import Comments from "./Comments";

import {editFavouriteMovieAsync}  from '../reducers/users/thunks';
import {addFavouriteMovie} from '../actions/index.js';

export default function MovieInfo() {
    const movie = useSelector(state => state.movies.selectedMovie);
    const comments = useSelector(state => state.comments.moviesComments);
    const userPreference = useSelector(state => state.persistReducer.userPreference);
    const userId = useSelector(state => state.persistReducer.userIdReducer);
    // const movieRate = Math.round(comments.totalRate * 2 /comments.commentList.length)/2
    const movieRate = comments.averageRate;
    const dispatch = useDispatch();

    let liked, unliked;
    if (userPreference.favouriteMovies.includes(movie._id)) {
        liked = "block";
        unliked = "none";
    } else {
        unliked = "block";
        liked = "none";
    }

    if (!userId.isLogin){
        liked = "none";
        unliked = "none";
   }
   
    return (
      <div className = "MovieInfo">
        <div className = "MovieInfoContainer">
          <div className="TitleYearContainer">
            <p className = "MovieInfoTitle">{movie.MovieTitle}</p>
            <p className = "MovieInfoYear">{movie.MovieYear}</p>
          </div>
          <img className = "MovieInfoPoster" src={movie.imageData} alt="poster"/>
          <div className = "GeneralInfoContainer">
            <p className = "MovieInfoDirector">Director: {movie.MovieDirector}</p>
            <p className = "MovieInfoWriter">Writer: {movie.MovieWriter}</p>
            <p className = "MovieInfoGenre">Genre: {movie.MovieGenre.map((genre) => (genre + "/"))}</p>
          </div>

          <p className = "MovieInfoRating">{movieRate} / 10 ★</p>
          <button className = "MovieInfoLikeButtonNotLiked" onClick={() =>
            {dispatch(addFavouriteMovie(movie._id));
              dispatch(editFavouriteMovieAsync({userId: userId.uid, movieId: movie._id}))}}
              style = {{display: liked}}>
              Unlike
          </button>
          <button className = "MovieInfoLikeButtonLiked" onClick={() =>
            {dispatch(addFavouriteMovie(movie._id));
              dispatch(editFavouriteMovieAsync({userId: userId.uid, movieId: movie._id}))}}
              style = {{display: unliked}}>
              Like
          </button>

          <p className = "MovieInfoDescription">Movie Description: {movie.MovieDescription}</p>
        </div>
        <Comments/>
      </div>
    )
}
