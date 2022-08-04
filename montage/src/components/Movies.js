import "./style/movies.css"
import {getMoviesAsync, getMovieAsync}  from '../reducers/movies/thunks';
import {useSelector, useDispatch} from 'react-redux';
import React, { useEffect } from 'react';
import {getCommentsAsync} from "../reducers/comments/thunks";
import {useNavigate} from 'react-router-dom';
import Search from "./Search";
import background from "./style/moviebg.jpg";

export default function Movies() {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMoviesAsync())
    }, []);

    const navigate = useNavigate();

    const jumpToMovieInfo = () => {
        navigate('/MovieInfo');
    }

    let a = movies.map((movie, index) => (
      <div key={movie.movieId}>
        <div className="MovieCard" onClick={() => {jumpToMovieInfo();
          dispatch(getMovieAsync(movie.movieId));
          dispatch(getCommentsAsync(movie.movieId));}}>
          <p className = "MovieCardTitle">{movie.MovieTitle}</p>
          <div className = "movieImg-wrapper">
            <img className = "zoom" src = {movie.imageData} alt={movie.MovieTitle}/>
          </div>
        </div>
      </div>
    ));
    return (
        <div className = "Movies" >
            <Search/>
            {a}
        </div>
    )
}
