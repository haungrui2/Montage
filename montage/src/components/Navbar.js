/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/
import {useDispatch} from 'react-redux';
import { OpenMovies, CloseMoviesInfo, OpenCoverPage, CloseCoverPage,
  CloseMovies } from '../actions/index.js';
import logo from "../images/montageLogo.jpg";
import "./style/navbar.css"
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, SearchBarContainer,
SearchInputContainer, SearchInput, SearchIcon} from "./style/navbarStyle"
import {IoSearch} from "react-icons/io5";

export default function Navbar() {
  const dispatch = useDispatch();
  // return (
  //     <div className = "navbar">
  //         <button id = "MainButton" onClick={() => {
  //           dispatch(CloseMoviesInfo()); dispatch(CloseMovies());
  //           dispatch(OpenCoverPage())}}>MainButton
  //         </button>
  //         {/* this will later be replaced by an image of the logo */}
  //         <button id = "MoviesButton" onClick={() => {
  //           jumpToMovies(); dispatch(CloseMoviesInfo());
  //           dispatch(CloseCoverPage())}}>MoviesButton
  //         </button>
  //         <div className = "SearchContainer">
  //             <form className = "SearchForm">
  //                 <input type = "text" className = "SearchText"
  //                   placeholder = "Search">
  //                 </input>
  //                 <button id = "SearchButton">Q</button>
  //             </form>
  //         </div>
  //         <button id = "Login" onClick={jumpToLogin}>Login</button>
  //     </div>
  //   )
  return (
    <>
    <Nav>
      <NavLink to="/">
        <img className="image" src={logo} alt="logo image" onClick={() => {
        dispatch(CloseMoviesInfo()); dispatch(CloseMovies());
        dispatch(OpenCoverPage())}}/>
      </NavLink>
      <NavMenu>
        <NavLink to="/Movies">
          Movies
        </NavLink>
      </NavMenu>

      <SearchBarContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Search for Movies" />
        </SearchInputContainer>
      </SearchBarContainer>
      <SearchIcon>
        <IoSearch/>
      </SearchIcon>

      <NavBtn>
        <NavBtnLink to="/Login">Login</NavBtnLink>
      </NavBtn>
    </Nav>

    </>
  )
 }
