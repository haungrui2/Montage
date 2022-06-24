/* This is the page for movie information, including movie name, the poster,
rating, director, writer, genre, and description */

export default function MovieInfo() {
    return (
        <div className = "MovieInfo">
            <div className = "MovieInfoContainer">
                <div className="TitleYearContainer">
                    <p className = "MovieInfoTitle">となりのトトロ</p>
                    <p className = "MovieInfoYear">1988</p>
                </div>
                <img className = "MovieInfoPoster" src={ require('../images/poster.png') } alt="poster"/>
                <div className = "GeneralInfoContainer">
                    <p className = "MovieInfoDirector">Director: Hayao Miyazaki</p>
                    <p className = "MovieInfoWriter">Writer: Hayao Miyazaki</p>
                    <p className = "MovieInfoGenre">Genre: Animation/Comedy/Family</p>
                </div>

                <p className = "MovieInfoRating">10 / 10 ★</p>
                <p className = "MovieInfoDescription">Movie Description: The adventure story of two girls and forest spirits</p>
            </div>
        </div>
    )
}