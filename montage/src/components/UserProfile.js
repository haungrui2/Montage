import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

function UserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId.id)

  const getProfileData = (userId) => {
    fetch(`http://localhost:3001/users/${userId}`, {method: 'GET'})
    .then((data) => dispatch(getUserData(data)))
  }

  const profileData = useSelector(state => state.profile.data);

  return (
    <div className = "UserProfile">
      <div>
        <h4>{profileData.fullName}</h4>
      </div>
    </div>
  )
}
