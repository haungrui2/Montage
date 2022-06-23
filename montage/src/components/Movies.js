import "./style/movies.css"
import {getMoviesAsync}  from '../reducers/movies/thunks';
import {useSelector, useDispatch} from 'react-redux';
import React, { useEffect } from 'react';

export default function Movies() {
    const visibility = useSelector(state => state.others.navbar);
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getMoviesAsync());
    }, []);

    let a = movies.map((movie, index) => (
        <div className="MovieCard">
            <img className = "MovieCardPoster" alt={movie.MovieTitle}/>
            <p className = "MovieCardTitle">{movie.MovieTitle}</p>
        </div>
    ));
    return (
        <div className = "Movies" style={{display: visibility.movies}}>
            {a}
        </div>
    )
}

