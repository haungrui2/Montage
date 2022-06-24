const getComments = async (movieTitle) => {
    const response = await fetch('http://localhost:3001/comments/:' + movieTitle, {
      method: 'GET'
    });
    return response.json();
  };

const addComment = async (comment) => {
    const response = await fetch('http://localhost:3001/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

  export default {
      getComments,
      addComment
  };