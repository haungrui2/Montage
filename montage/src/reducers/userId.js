let userId = {
  id: ""
}

const userIdReducer = (state=userId, action) => {
  switch(action.type) {
    case "getUserId" :
      return {
        id: action.payload.id
      };
    default:
        return state;
    }
}

export default userIdReducer;
