/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/
import "./style/navbar.css"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesAsync}  from '../reducers/movies/thunks';
import {handleDeleteQuickChangeSearchMovieTitle, handleOnQuickChangeSearchMovieTitle} from '../actions';
import logo from "./style/montageLogo.jpg";
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, SearchBarContainer,
SearchInputContainer, SearchInput, SearchIcon} from "./style/navbarStyle"
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
         <img className="image" src={logo} alt="logo image"/>
       </NavLink>
       <NavMenu>
         <NavLink to="/Movies" onClick={() => {dispatch(getMoviesAsync())}}>
           Movies
         </NavLink>
       </NavMenu>
       <SearchBarContainer>
         <SearchInputContainer>
           <SearchInput placeholder="Search for Movies"
           value={searchState.qucikSearchMovieTitle}
           onChange={(e) => dispatch(handleOnQuickChangeSearchMovieTitle(e.target.value))}
           onKeyPress={(key) => {if(key.key === "Enter") 
           {dispatch(getMoviesAsync(qucikSearchQueryGenerator(searchState))); jumpToMovies();
            dispatch(handleDeleteQuickChangeSearchMovieTitle());}}} />
         </SearchInputContainer>
       </SearchBarContainer>
       <SearchIcon onClick={() => {dispatch(getMoviesAsync(qucikSearchQueryGenerator(searchState)));
         jumpToMovies()}}>
         <IoSearch/>
       </SearchIcon>
       <HamburgerMenu />
    </Nav>
  )
}

function qucikSearchQueryGenerator(state) {
  let query = "?MovieTitle=" + state.qucikSearchMovieTitle + "&MovieYear="
  +"&MovieRate=" + "&MovieGenre1=" + "&MovieGenre2=" + "&MovieGenre3=" + 
  "&MovieGenre4=" + "&MovieGenre5=";
  return query;
}

