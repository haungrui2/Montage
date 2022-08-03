import "./style/userProfile.css";
import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, addUserAvatar } from "../actions";
import { addUserAvatarAsync } from "../reducers/users/thunks";
import { getCommentsAsync } from "../reducers/comments/thunks";
import { useNavigate } from 'react-router-dom';
import "./style/userProfile.css";
import { getMoviesAsync, getMovieAsync } from "../reducers/movies/thunks";

function UserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.persistReducer.userIdReducer.uid);

  const getProfileData = () => {
    fetch(`http://localhost:3001/users/${userId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => dispatch(getUserData(data)))
  }

  useEffect(() => {
    getProfileData();
    dispatch(getMoviesAsync())
  }, []);

  const profileData = useSelector(state => state.persistReducer.profile.data);
  const movies = useSelector(state => state.movies.movies);
  const likedMovies = useSelector(state => state.persistReducer.userPreference.favouriteMovies);
  const avatar = useSelector(state => state.persistReducer.userPreference.avatar);
  var reader = new FileReader();
  const navigate = useNavigate();
  const jumpToMovieInfo = () => {
    navigate('/MovieInfo');
  }

  return (
    <div className="UserProfile">
      <div className="profileUserInformation">
        <div className='ProfileImage'>
          <img className='profileAvatar' src={avatar} alt="Avatar" />
          <input id="profileUpload" type="file" accept="image/png, image/jpeg" hidden onChange={(e) => {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function () {
              dispatch(addUserAvatar(reader.result));
              dispatch(addUserAvatarAsync({ userId: profileData._id, avatar: reader.result }))
            }
          }} />
          <label id="profileUploadLabel" for="profileUpload"><span
            id="profileUploadText">Upload</span></label>
        </div>
        <div className='profileInfimation'>
          <p className='profileName'>User Name: {profileData.fullName}</p>
          <p className='profileEmail'>Email: {profileData.email}</p>
          <div className="profileFavouriteMovie">
            <p>Favourite Movies:</p>
            {movies.filter(movie => likedMovies.includes(movie._id)).map(filteredMovie => (
              <div className="profileFavouriteMovieCard" onClick={() => { jumpToMovieInfo(); dispatch(getMovieAsync(filteredMovie.movieId)); dispatch(getCommentsAsync(filteredMovie.movieId)) }}>
                <p className="profileFavouriteMovieTitle">{filteredMovie.MovieTitle}</p>
                <img className="profileFavouriteMoviePosters" src={filteredMovie.imageData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;