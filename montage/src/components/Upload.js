import "./style/upload.css";
import {
    handleOnChangeMovieTitle, handleOnChangeMovieYear,
    handleOnChangeMovieDirector, handleOnChangeMovieWriter,
    handleOnChangeMovieGenre, handleOnChangeMovieId,
    handleOnChangeMovieDescription, handleOnChangeMovieImage, clearUploadState
} from '../actions/index.js';
import {useSelector, useDispatch} from 'react-redux';
import {addMovieAsync, editMovieAsync} from "../reducers/movies/thunks";

export default function Upload() {
    const profileData = useSelector(state => state.persistReducer.profile.data);
    const uploadState = useSelector(state => state.others.upload);
    const genres = ["Action", "Adventure", "Comedy", "Crime", "Drama", "Epics", "Horror",
        "Musicals", "Science Fiction", "War", "Westerns", "Detective", "Mystery", "Biographical",
        "Disaster", "Fantasy", "Road", "Romance", "Sports", "Superhero", "Documentary",
        "Animation", "Family"]
    let checkboxs = genres.map((genre) => (
        <div className="checkBoxContainer">
            <input className="genreCheckBox" type="checkbox" id={genre} value={genre}
                   onChange={(e) => dispatch(handleOnChangeMovieGenre(genre))}/>
            <label className="checkBoxLabel" for={genre}>{genre}</label>
        </div>
    ))
    const dispatch = useDispatch();
    var reader = new FileReader();
    reader.onload = function () {
        dispatch(handleOnChangeMovieImage(reader.result));
    };
    if (profileData.isAdmin)
        return (
            <div className="upload">
                <input required className="shortInputBox uploadPoster" type="file" accept="image/png, image/jpeg"
                       onChange={(e) => reader.readAsDataURL(e.target.files[0])}/>
                <input required className="shortInputBox uploadMovieTitle" placeholder="Movie Title"
                       onChange={(e) => dispatch(handleOnChangeMovieTitle(e.target.value))}/>
                <input required className="shortInputBox uploadMovieId" placeholder="Movie Id"
                       onChange={(e) => dispatch(handleOnChangeMovieId(e.target.value))}/>
                <input required type="number" max="2100" min="1800" className="shortInputBox uploadMovieTitle"
                       placeholder="Movie Year" onChange={(e) => dispatch(handleOnChangeMovieYear(e.target.value))}/>
                <input required className="shortInputBox uploadMovieDirector" placeholder="Movie Director"
                       onChange={(e) => dispatch(handleOnChangeMovieDirector(e.target.value))}/>
                <input required className="shortInputBox uploadMovieWriter" placeholder="Movie Writer"
                       onChange={(e) => dispatch(handleOnChangeMovieWriter(e.target.value))}/>
                <div className="genreCheckBoxs">
                    {checkboxs}
                </div>
                <input required className="uploadMovieDescription" placeholder="Movie Description"
                       onChange={(e) => dispatch(handleOnChangeMovieDescription(e.target.value))}/>
                <div>
                    <button className="uploadButton" onClick={() => {
                        if (requirement(uploadState)) {
                            dispatch(addMovieAsync(uploadState));
                            dispatch(clearUploadState())
                        }
                    }}>Upload
                    </button>
                    <button className="editButton" onClick={() => {
                        if (requirement(uploadState)) {
                            dispatch(editMovieAsync(uploadState));
                            dispatch(clearUploadState())
                        }
                    }}>Edit
                    </button>
                </div>
            </div>
        )
}

function requirement(state) {
    if (state.imageData === "") {
        alert("Must have a movie poster!")
        return false;
    }
    if (state.MovieTitle === "") {
        alert("Must have a movie title!")
        return false;
    }
    if (state.movieId === "") {
        alert("Must have a movie id!")
        return false;
    }
    if (state.MovieYear === 0) {
        alert("Must have a movie year!")
        return false;
    }
    if (state.MovieDirector === "") {
        alert("Must have a movie director!")
        return false;
    }
    if (state.MovieWriter === "") {
        alert("Must have a movie writer!")
        return false;
    }
    if (state.MovieGenre.length === 0) {
        alert("Must have at least one genre!")
        return false;
    }
    if (state.MovieGenre.length > 5) {
        alert("Can only have at most 5 genres!")
        return false;
    }
    if (state.MovieDescription === "") {
        alert("Must have a movie description!")
        return false;
    }
    return true;
}


