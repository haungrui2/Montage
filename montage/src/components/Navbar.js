/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/
import "./style/navbar.css"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesAsync}  from '../reducers/movies/thunks';
import {handleOnChangeSearchMovieTitle} from '../actions';

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profileData = useSelector(state => state.others.profile.data);
    const searchState = useSelector(state => state.others.search);

    let adminDisplay = "none";
    if (profileData.isAdmin){
        adminDisplay = "block";
    }
    
    const jumpToMain = () => {
        navigate('/');
    }
    const jumpToLogin = () => {
    navigate('/Login');
    }
    const jumpToMovies = () => {
        navigate('/Movies');
    }
    const jumpToUpload = () => {
        navigate('/Upload');
    }

    return (
        <div className = "navbar">
            <button id = "MainButton" onClick={jumpToMain}>MainButton</button>
            {/* this will later be replaced by an image of the logo */}
            <button id = "MoviesButton" onClick={() => {dispatch(getMoviesAsync()); jumpToMovies()}}>MoviesButton</button>
            <div className = "SearchContainer">
                <div className = "SearchForm">
                    <input type = "text" className = "SearchText" placeholder = "Search"
                    value={searchState.MovieTitle} onChange={(e) => dispatch(handleOnChangeSearchMovieTitle(e.target.value))}></input>
                    <button id = "SearchButton" onClick={() => {dispatch(getMoviesAsync(helper(searchState))); jumpToMovies()}}>Q</button>
                </div>
            </div>
            <button id = "Upload" onClick={jumpToUpload} style={{display: adminDisplay}}>Upload</button>
            <button id = "Login" onClick={jumpToLogin}>Login</button>
        </div>
    )
 }

 function helper(state) {
    let query = "?MovieTitle=" + state.MovieTitle + "&MovieYear=" + state.MovieYear;
    query = query+"&MovieRate="+state.MovieRate
    if (state.MovieGenre[0]) {
        query = query + "&MovieGenre1=" + state.MovieGenre[0];
    }
    if (state.MovieGenre[1]) {
        query = query + "&MovieGenre2=" + state.MovieGenre[1];
    }
    if (state.MovieGenre[2]) {
        query = query + "&MovieGenre3=" + state.MovieGenre[2];
    }
    if (state.MovieGenre[3]) {
        query = query + "&MovieGenre4=" + state.MovieGenre[3];
    }
    if (state.MovieGenre[4]) {
        query = query + "&MovieGenre5=" + state.MovieGenre[4];
    }
    return query;
}