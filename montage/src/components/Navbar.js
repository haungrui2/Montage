import "./style/navbar.css"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesAsync} from '../reducers/movies/thunks';
import {handleDeleteQuickChangeSearchMovieTitle, handleOnQuickChangeSearchMovieTitle} from '../actions';
import logo from "./style/montageLogo.jpg";
import {
    Nav,
    NavLink,
    NavMenu,
    SearchBarContainer,
    SearchIcon,
    SearchInput,
    SearchInputContainer
} from "./style/navbarStyle"
import {IoSearch} from "react-icons/io5";
import {HamburgerMenu} from "./HamburgerMenu/HamburgerMenu"

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchState = useSelector(state => state.others.search);

    const jumpToMovies = () => {
        navigate('/Movies');
    }

    return (
        <Nav>
            <NavLink to="/">
                <img className="image" src={logo} alt="logo"/>
            </NavLink>
            <NavMenu>
                <NavLink to="/Movies" onClick={() => {
                    dispatch(getMoviesAsync())
                }}>
                    Movies
                </NavLink>
            </NavMenu>
            <SearchBarContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Search for Movies"
                                 value={searchState.qucikSearchMovieTitle}
                                 onChange={(e) => dispatch(handleOnQuickChangeSearchMovieTitle(e.target.value))}
                                 onKeyPress={(key) => {
                                     if (key.key === "Enter") {
                                         dispatch(getMoviesAsync(qucikSearchQueryGenerator(searchState)));
                                         jumpToMovies();
                                         dispatch(handleDeleteQuickChangeSearchMovieTitle());
                                     }
                                 }}/>
                </SearchInputContainer>
            </SearchBarContainer>
            <SearchIcon onClick={() => {
                dispatch(getMoviesAsync(qucikSearchQueryGenerator(searchState)));
                jumpToMovies()
            }}>
                <IoSearch/>
            </SearchIcon>
            <HamburgerMenu/>
        </Nav>
    )
}

function qucikSearchQueryGenerator(state) {
    return "?MovieTitle=" + state.qucikSearchMovieTitle;
}

