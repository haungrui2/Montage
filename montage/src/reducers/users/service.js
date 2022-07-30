const editFavouriteMovie = async (editData) => {
  const response = await fetch('http://localhost:3001/users/editFavouriteMovies', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editData)
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};

const recommendMovie = async (userId) => {
  const response = await fetch('http://localhost:3001/users/recommend', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userId)
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};


let Userservices = {
    editFavouriteMovie,
    recommendMovie
};

export default Userservices;