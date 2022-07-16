import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import "./style/search.css"

export default function Search() {
    const genres = ["Action", "Adventure", "Comedy", "Crime", "Drama", "Epics", "Horror",
    "Musicals", "Science Fiction", "War", "Westerns", "Detective", "Mystery", "Biographical",
    "Disaster", "Fantasy", "Road", "Romance", "Sports", "Superhero", "Documentary",
    "Animation", "Family"];

    const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017,
    2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
    2006, 2005, 2004, 2003, 2002, 2001, 2000];

    let genreList = genres.map((genre) => (
        <li className="genre-tag">
            {genre}
        </li>
    ))

    let yearList = years.map((year) => (
        <button className="genre-tag" name="choice" style={{color: "#0000ff", backgroundColor: "#ddd"}}>
            {year}
        </button>
    ))
    return (
        <div className = "Search">
            <div className="genreListContainer">
            <ul>
            {genreList}
            </ul>
            </div>

            <div className="yearListContainer">
            <ul>
            {yearList}
            <li className="genre-tag" name="choice">
            <label>Other:</label>
            <div className="yearInputContainer">
            <input type="number" className="yearInputBox" max="2100" min="1800"></input>
            </div>
            </li> 
            </ul>
            </div>
        </div>
    )
}