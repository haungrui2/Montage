import "./style/search.css"
import {useSelector, useDispatch} from 'react-redux';
import {getMoviesAsync} from '../reducers/movies/thunks';
import {handleOnChangeSearchMovieTitle, handleOnChangeSearchMovieYear,
    handleOnChangeSearchMovieGenre, handleOnChangeSearchMovieRate}
    from '../actions';

export default function Search() {
    const searchState = useSelector(state => state.others.search);
    const dispatch = useDispatch();
    const genres = ["Action", "Adventure", "Comedy", "Crime", "Drama", "Epics", "Horror",
    "Musicals", "Science Fiction", "War", "Westerns", "Detective", "Mystery", "Biographical",
    "Disaster", "Fantasy", "Road", "Romance", "Sports", "Superhero", "Documentary",
    "Animation", "Family"];

    const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017,
    2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
    2006, 2005, 2004, 2003, 2002, 2001, 2000];

    let genreList = genres.map((genre) => (
        <div className = "genreBoxContainer">
        <input type="checkbox" className="genre-tag-box" id={genre} name="choice"
        onClick={(e) => dispatch(handleOnChangeSearchMovieGenre(genre))}/>
        <label className = "genre-tag-label" for={genre}>{genre}</label>
        </div>
    ))

    let yearList = years.map((year) => (
        <div className = "yearBoxContainer">
        <input type="radio" className="year-tag-box" id={year} name="choice"
        onClick={(e) => dispatch(handleOnChangeSearchMovieYear(year))}/>
        <label className = "year-tag-label" for={year}>{year}</label>
        </div>
    ))
    return (
        <div className = "Search">
            <div className="searchMovieContainer">
                <p id="searchText">MovieTitle:</p>
                <input id="searchMovieInput" value={searchState.MovieTitle}
                onChange={(e) => dispatch(handleOnChangeSearchMovieTitle(e.target.value))}/>
            </div>

            <div className="rateMovieContainer">
                <p id="searchText">Rate Above:</p>
                <input id="searchMovieInput" type= "number" max="10" min="0"
                value={searchState.MovieRate} onChange={(e) =>
                  dispatch(handleOnChangeSearchMovieRate(e.target.value))}/>
            </div>

            <div className="genreListContainer">
                <p>Genre:</p>
                <ul>
                    {genreList}
                </ul>
            </div>

            <div className="yearListContainer">
                <p>Year:</p>
                <ul>
                    {yearList}
                    <div className = "yearBoxContainer2">
                        <label className = "genre-tag-label" for="other">Other:</label>
                        <input className="yearInputBox" type= "number" max="2100" min="1800"
                        value={searchState.MovieYear} onChange={(e) =>
                          dispatch(handleOnChangeSearchMovieYear(e.target.value))}/>
                    </div>
                </ul>
            </div>
            <div className="ButtonContainer">
                <button id="SearchButton1" onClick={() =>
                  dispatch(getMoviesAsync(helper(searchState)))}>Search</button>
            </div>
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
