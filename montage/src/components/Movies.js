import "./style/movies.css"
import {getMoviesAsync, getMovieAsync}  from '../reducers/movies/thunks';
import {useSelector, useDispatch} from 'react-redux';
import React, { useEffect } from 'react';
import { CloseMovies, OpenMoviesInfo } from '../actions'
import {getCommentsAsync} from "../reducers/comments/thunks";

export default function Movies() {
    const visibility = useSelector(state => state.others.navbar);
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getMoviesAsync());
    }, []);

    let a = movies.map((movie, index) => (
        <div className="MovieCard" onClick={() => {dispatch(CloseMovies()); dispatch(OpenMoviesInfo()); dispatch(getMovieAsync(movie.src)); dispatch(getCommentsAsync(movie.src));}}>
            <img className = "MovieCardPoster" src = {"http://localhost:3001/images/" + movie.src} alt={movie.MovieTitle}/>
            <p className = "MovieCardTitle">{movie.MovieTitle}</p>
        </div>
    ));
    return (
        <div className = "Movies" style={{display: visibility.movies}}>
            {a}
        </div>
    )
}

