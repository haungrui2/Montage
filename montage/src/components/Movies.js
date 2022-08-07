import "./style/movies.css"
import {getMovieAsync} from '../reducers/movies/thunks';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import {getCommentsAsync} from "../reducers/comments/thunks";
import {useNavigate} from 'react-router-dom';
import Search from "./Search";

export default function Movies() {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jumpToMovieInfo = () => {
        navigate('/MovieInfo');
    }

    let movieCards = movies.map((movie, index) => (
        <div key={movie.movieId}>
            <div className="MovieCard" onClick={() => {
                jumpToMovieInfo();
                dispatch(getMovieAsync(movie.movieId));
                dispatch(getCommentsAsync(movie.movieId));
            }}>
                <p className="MovieCardTitle">{movie.MovieTitle}</p>
                <div className="movieImg-wrapper">
                    <img className="zoom" src={movie.imageData} alt={movie.MovieTitle}/>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="Movies">
            <Search/>
            <div className="movieCardContainer">
                {movieCards}
            </div>
        </div>
    )
}
