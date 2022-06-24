/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  const jumpToLogin = () => {
    navigate('/Login');
  };

    return (
        <div className = "navbar">
            <button id = "MainButton">MainButton</button>
            {/* this will later be replaced by an image of the logo */}
            <button id = "MoviesButton">MoviesButton</button>
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
