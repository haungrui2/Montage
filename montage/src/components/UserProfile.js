import "./style/userProfile.css";
import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, getMovies } from "../actions";
import "./style/userProfile.css";

function UserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.persistReducer.userIdReducer.uid);

  const getProfileData = () => {
    fetch(`http://localhost:3001/users/${userId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => dispatch(getUserData(data)))
  }

  useEffect(() => {
    getProfileData()
  }, []);
  
  const profileData = useSelector(state => state.persistReducer.profile.data);
  console.log(profileData);

  const movies = useSelector(state => state.movies.movies);
  const likedMovies = useSelector(state => state.persistReducer.userPreference.favouriteMovies);
  var reader = new FileReader();
  const profileData = useSelector(state => state.others.profile.data);

  return (
    <div className="UserProfile">
      <div className="profileUserInformation">
        <div className='ProfileImage'>
          <img className='profileAvatar' src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img>
          <input id="profileUpload" type="file" accept="image/png, image/jpeg" hidden></input>
          <label id="profileUploadLabel" for="profileUpload"><span id = "profileUploadText">Upload</span></label>
        </div>
        <div className='profileInfimation'>
          <p className='profileName'>User Name: {profileData.fullName}</p>
          <p className='profileEmail'>Email: {profileData.email}</p>
          {movies.filter(movie => likedMovies.includes(movie._id)).map(filteredMovie => (
          <div>
            <p>{filteredMovie.MovieTitle}</p>
            <img className="post" src={filteredMovie.imageData} />
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
