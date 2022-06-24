/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/
import {useDispatch} from 'react-redux';
import { OpenLogin, OpenMovies, CloseMoviesInfo } from '../actions/index.js'
export default function Navbar() {
    const dispatch = useDispatch();
    return (
        <div className = "navbar">
            <button id = "MainButton" >MainButton</button>
            {/* this will later be replaced by an image of the logo */}
            <button id = "MoviesButton" onClick={() => { dispatch(CloseMoviesInfo()); dispatch(OpenMovies())}}>MoviesButton</button>
            <div className = "SearchContainer">
                <form className = "SearchForm">
                    <input type = "text" className = "SearchText" placeholder = "Search"></input>
                    <button id = "SearchButton">Q</button>
                </form>
            </div>
            <button id = "Login" onClick={() => dispatch(OpenLogin())}>Login</button>
        </div>
    )
}