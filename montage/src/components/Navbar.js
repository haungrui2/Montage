/* This is the navbar for all windows, including the logo (main button, which sends
you back to the main page), the menu, the search bar, and user login option.*/
import "./style/navbar.css"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesAsync}  from '../reducers/movies/thunks';
import {handleOnChangeSearchMovieTitle} from '../actions';
import logo from "./style/montageLogo.jpg";
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, SearchBarContainer,
SearchInputContainer, SearchInput, SearchIcon} from "./style/navbarStyle"
import {IoSearch} from "react-icons/io5";
import axios from "axios";
import {useState} from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileData = useSelector(state => state.others.profile.data);
  const searchState = useSelector(state => state.others.search);
  // const [login, setLogin] = useState(false);

  let adminDisplay = "none";
  if (profileData.isAdmin){
      adminDisplay = "block";
  }
  // if (profileData.isLogin) {
  //   setLogin(true);
  // }

  const jumpToMovies = () => {
      navigate('/Movies');
  }

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      dispatch(getMoviesAsync(helper(searchState)));
      jumpToMovies();
    }
  }

  // const handleLogout = async () => {
  //   // fetch(`http://localhost:3001/users/logout${profileData._id}`, {method: 'GET'})
  //   // .then((response) => response.json())
  //   // .then(res => res.json())
  //   // .catch(e => console.log(e))
  //   setLogin(false);
  //   const res = await axios.get(`http://localhost:3001/users/logout${profileData._id}`)
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   .then(res => {
  //     res.json();
  //   })
  // };

  // return (
  //   <div className = "navbar">
  //     <button id = "MainButton" onClick={jumpToMain}>MainButton</button>
  //     <button id = "MoviesButton" onClick={() => {dispatch(getMoviesAsync()); jumpToMovies()}}>MoviesButton</button>
  //     <div className = "SearchContainer">
  //         <div className = "SearchForm">
  //             <input type = "text" className = "SearchText" placeholder = "Search"
  //             value={searchState.MovieTitle} onChange={(e) => dispatch(handleOnChangeSearchMovieTitle(e.target.value))}></input>
  //             <button id = "SearchButton" onClick={() => {dispatch(getMoviesAsync(helper(searchState))); jumpToMovies()}}>Q</button>
  //         </div>
  //     </div>
  //     <button id = "Upload" onClick={jumpToUpload} style={{display: adminDisplay}}>Upload</button>
  //     <button id = "Login" onClick={jumpToLogin}>Login</button>
  //   </div>
  // )
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
           value={searchState.MovieTitle}
           onChange={(e) => dispatch(handleOnChangeSearchMovieTitle(e.target.value))} />
         </SearchInputContainer>
       </SearchBarContainer>
       <SearchIcon onClick={() => {dispatch(getMoviesAsync(helper(searchState)));
         jumpToMovies()}} onKeyPress={handleKeyPress}>
         <IoSearch/>
       </SearchIcon>
       <NavBtn>
        <NavBtnLink to="/Upload" style={{display: adminDisplay}}>Upload</NavBtnLink>
       </NavBtn>
       <NavBtn>
          <NavBtnLink to="/Login">Login</NavBtnLink>
       </NavBtn>
      </Nav>
       // {login ? (
       //   <NavBtn>
       //    <NavBtnLink to="/">Logout</NavBtnLink>
       //   </NavBtn>
       // ) : (
       //   <NavBtn>
       //    <NavBtnLink to="/Login">Login</NavBtnLink>
       //   </NavBtn>
       // )}

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
