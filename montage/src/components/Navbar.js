/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/
import "./style/navbar.css"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profileData = useSelector(state => state.others.profile.data);

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
            <button id = "MoviesButton" onClick={jumpToMovies}>MoviesButton</button>
            <div className = "SearchContainer">
                <form className = "SearchForm">
                    <input type = "text" className = "SearchText" placeholder = "Search"></input>
                    <button id = "SearchButton">Q</button>
                </form>
            </div>
            <button id = "Upload" onClick={jumpToUpload} style={{display: adminDisplay}}>Upload</button>
            <button id = "Login" onClick={jumpToLogin}>Login</button>
        </div>
    )
 }
