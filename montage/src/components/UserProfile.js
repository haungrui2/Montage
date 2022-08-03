import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, getMovies } from "../actions";
import "./style/userProfile.css";

function UserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.others.userIdReducer.uid);

  const getProfileData = () => {
    fetch(`http://localhost:3001/users/${userId}`, {method: 'GET'})
    .then((response) => response.json())
    .then((data) => dispatch(getUserData(data)))
  }

  useEffect(() => {
    getProfileData()
  }, []);

  const profileData = useSelector(state => state.others.profile.data);

  const getAllMovies = () => {
    fetch(`http://localhost:3001/movies`, {method: 'GET'})
    .then((response) => response.json())
    .then((data) => dispatch(getMovies(data)))
  }

  useEffect(() => {
    getAllMovies()
  }, []);

  const movies = useSelector(state => state.others.userMovie.movies);
  const likedMovies = useSelector(state => state.others.userPreference.favouriteMovies);

  return (
    <div className = "UserProfile">
      <div className="basicInfo">
        <h3>{profileData.fullName}</h3>
        <p>{profileData.email}</p>
      </div>
      <hr />
      <div className="likedList">
        <h4>Liked Movies</h4>
        {movies.filter(movie => likedMovies.includes(movie._id)).map(filteredMovie => (
          <div>
            <p>{filteredMovie.MovieTitle}</p>
            <img className="post" src={filteredMovie.imageData} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProfile;
