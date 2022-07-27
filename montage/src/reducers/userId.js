let userId = {
  uid: ""
}

const userIdReducer = (state=userId, action) => {
  console.log(action);
  switch(action.type) {
    case "getUserId" :
      return {
        uid: action.payload
      };
    default:
        return state;
    }
}

export default userIdReducer;
