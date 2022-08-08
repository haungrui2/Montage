import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import "./style/coverPage.css"
import {recommendMovieAsync} from '../reducers/users/thunks';
import {getMovieAsync, randomMovieAsync} from '../reducers/movies/thunks';
import {getCommentsAsync} from "../reducers/comments/thunks";
import {useNavigate} from 'react-router-dom';

export default function CoverPage() {
    const [dateTime, setDateTime] = useState(new Date());
    const profileData = useSelector(state => state.persistReducer.profile.data);
    const userState = useSelector(state => state.persistReducer.userIdReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        setDateTime(new Date());
    }, []);

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let date = dateTime.getDate();
    let day = weekday[dateTime.getDay()];

    useEffect(() => {
        if (userState.isLogin) {
            dispatch(recommendMovieAsync(profileData._id))
        } else {
            dispatch(randomMovieAsync())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const recommendMovie = useSelector(state => state.users.recommendMovie);
    const randomMovie = useSelector(state => state.movies.randomMovie);
    let movie;
    if (userState.isLogin) {
        movie = recommendMovie;
    } else {
        movie = randomMovie;
    }

    const navigate = useNavigate();
    const jumpToMovieInfo = () => {
        navigate('/MovieInfo');
    }

    return (
        <div className="CoverPage">
            <div className="CoverPageDateContainer">
                <div id="Year">{year}</div>
                <div id="Month">{month}</div>
                <div id="Date">{date}</div>
                <div id="Day">{day}</div>
            </div>

            <div className="img-wrapper">
                <img className="zoom" src={movie.imageData} alt="poster"
                     onClick={() => {
                         dispatch(getMovieAsync(movie.movieId));
                         dispatch(getCommentsAsync(movie.movieId));
                         jumpToMovieInfo();
                     }}/>
            </div>
            <div className="CoverPageCommentContainer">
                <p id="CoverPageComment1">{movie.MovieTitle}</p>
                <p id="CoverPageComment2">{movie.MovieYear}</p>
            </div>
        </div>
    )
}
