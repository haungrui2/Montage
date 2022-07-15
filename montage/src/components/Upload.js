import "./style/upload.css";
import {useState} from "react";
import {handleOnChangeMovieTitle, handleOnChangeMovieYear,
    handleOnChangeMovieDirector, handleOnChangeMovieWriter,
    handleOnChangeMovieGenre, handleOnChangeMovieId,
    handleOnChangeMovieDescription, handleOnChangeMovieImage} from '../actions/index.js';
import {useSelector, useDispatch} from 'react-redux';

export default function Upload() {
    const uploadState = useSelector(state => state.others.upload);
    const genres = ["Action", "Adventure", "Comedy", "Crime", "Drama", "Epics", "Horror",
    "Musicals", "Science Fiction", "War", "Westerns", "Detective", "Mystery", "Biographical",
    "Disaster", "Fantasy", "Road", "Romance", "Sports", "Superhero", "Documentary",
    "Animation"]
    let a = genres.map((genre) => (
        <div className = "checkBoxContainer">
            <input className = "genreCheckBox" type="checkbox" id={genre} value={genre} onChange={(e) => dispatch(handleOnChangeMovieGenre(genre))}></input>
            <label className = "checkBoxLabel" for={genre}>{genre}</label><br></br>
        </div>
    ))
    const dispatch = useDispatch();
    var reader = new FileReader();
    reader.onload = function () {
        console.log(reader.result)
        dispatch(handleOnChangeMovieImage(reader.result));
    };
    return (
        <div className="upload">
            <p>{uploadState.imageData}</p>
            <input className = "shortInputBox uploadPoster" type="file" accept="image/png, image/jpeg" onChange={(e) => reader.readAsDataURL(e.target.files[0])}></input>
            <input className= "uploadMovieTitle" placeholder="Movie Title" onChange={(e) => dispatch(handleOnChangeMovieTitle(e.target.value))}></input>
            <input className = "shortInputBox uploadMovieId" placeholder="Movie Id" onChange={(e) => dispatch(handleOnChangeMovieId(e.target.value))}></input>
            <input type="number" max="2100" min="1800" className = "shortInputBox uploadMovieTitle" placeholder="Movie Year" onChange={(e) => dispatch(handleOnChangeMovieYear(e.target.value))}></input>
            <input className = "shortInputBox uploadMovieDirector" placeholder="Movie Director" onChange={(e) => dispatch(handleOnChangeMovieDirector(e.target.value))}></input>
            <input className = "shortInputBox uploadMovieWriter" placeholder="Movie Writer" onChange={(e) => dispatch(handleOnChangeMovieWriter(e.target.value))}></input>
            <div className = "genreCheckBoxs">
                {a}
            </div>
            <input className = "uploadMovieDescription" placeholder="Movie Description" onChange={(e) => dispatch(handleOnChangeMovieDescription(e.target.value))}></input>
            <div>
            <button className="uploadButton">Upload</button>
            </div>
        </div>
    )
}


