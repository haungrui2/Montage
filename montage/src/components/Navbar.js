/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/

import {Routes, Route, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { OpenMovies, CloseMoviesInfo, OpenCoverPage, CloseCoverPage, CloseMovies } from '../actions/index.js'

export default function Navbar() {
    const dispatch = useDispatch();
  
    const navigate = useNavigate();

  const jumpToLogin = () => {
    navigate('/Login');
}
const jumpToMovies = () => {
    navigate('/Movies');
}
    return (
        <div className = "navbar">
            <button id = "MainButton" onClick={() => { dispatch(CloseMoviesInfo()); dispatch(CloseMovies()); dispatch(OpenCoverPage())}}>MainButton</button>
            {/* this will later be replaced by an image of the logo */}
            <button id = "MoviesButton" onClick={() => {jumpToMovies(); dispatch(CloseMoviesInfo()); dispatch(CloseCoverPage())}}>MoviesButton</button>
            <div className = "SearchContainer">
                <form className = "SearchForm">
                    <input type = "text" className = "SearchText" placeholder = "Search"></input>
                    <button id = "SearchButton">Q</button>
                </form>
            </div>
            <button id = "Login" onClick={jumpToLogin}>Login</button>
        </div>
    )
}
