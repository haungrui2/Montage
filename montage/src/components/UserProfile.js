import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getUserData} from "../actions/index.js";

function UserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.others.userIdReducer.uid);

  const getProfileData = (userId) => {
    fetch(`http://localhost:3001/users/${userId}`, {method: 'GET'})
    .then((data) => dispatch(getUserData(data)))
  }

  const profileData = useSelector(state => state.others.profile.data);

  return (
    <div className = "UserProfile">
      <div>
        <h4>{profileData.fullName}</h4>
      </div>
    </div>
  )
}

export default UserProfile;
