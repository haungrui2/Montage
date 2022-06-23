import "./style/movies.css"
import {useSelector} from 'react-redux';

export default function Movies() {
    const visibility = useSelector(state => state.navbar);
    let a = movies.map((movie, index) => (
        <div className="MovieCard">
            <img className = "MovieCardPoster" src={ require("../images/poster.png") } alt={movie.MovieTitle}/>
            <p className = "MovieCardTitle">{movie.MovieTitle}</p>
        </div>
    ));
    return (
        <div className = "Movies"style={{display: visibility.movies}}>
            {a}
        </div>
    )
}

const movies = [
    {MovieTitle:"となりのトトロ", MovieYear:"1988", MovieDirector:"Hayao Miyazaki", 
    MovieWriter: "Hayao Miyazaki", MovieGenre: "Animation/Comedy/Family", MovieRating: "10",
    MovieDescription: "The adventure story of two girls and forest spirits", src: "../images/poster.png"},
    {MovieTitle:"The Unbearable Lightness of Being", MovieYear:"1988", MovieDirector:"Philip Kaufman", 
    MovieWriter: "Milan Kundera, Jean-Claude Carrière, Philip Kaufman", MovieGenre: "Drama/Romance", MovieRating: "7",
    MovieDescription: "A lovely story between a Czech doctor who has active sex life and a woman who wants monogamy.",
    src: "../images/poster1.png"},
    
  ];