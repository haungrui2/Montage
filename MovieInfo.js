/* This is the page for movie information, including movie name, the poster,
rating, director, writer, genre, and description */
export default function MovieInfo() {
    return (
        <div class = "MovieInfo">
            <div class = "MovieInfoContainer">
                <div class="TitleYearContainer">
                    <p class = "MovieInfoTitle">となりのトトロ</p>
                    <p class = "MovieInfoYear">1988</p>
                </div>
                <img class = "MovieInfoPoster" src={ require('../images/poster.png') } alt="poster"/>
                <div class = "GeneralInfoContainer">
                    <p class = "MovieInfoDirector">Director: Hayao Miyazaki</p>
                    <p class = "MovieInfoWriter">Writer: Hayao Miyazaki</p>
                    <p class = "MovieInfoGenre">Genre: Animation/Comedy/Family</p>
                </div>

                <p class = "MovieInfoRating">10 / 10 ★</p>
                <p class = "MovieInfoDescription">Movie Description: The adventure story of two girls and forest spirits</p>
            </div>
        </div>
    )
}