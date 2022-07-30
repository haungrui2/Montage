import React from 'react';
import {useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getUserData} from "../actions";

function UserProfile() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.others.userIdReducer.uid);

  const getProfileData = () => {
    fetch(`https://cpsc455montageserver.herokuapp.com/users/${userId}`, {method: 'GET'})
    .then((response) => response.json())
    .then((data) => dispatch(getUserData(data)))
  }

  useEffect(() => {
    getProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
