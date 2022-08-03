let userId = {
  uid: "",
  isLogin: false
}

const userIdReducer = (state=userId, action) => {
  switch(action.type) {
    case "getUserId" :
      return {
        ...state,
        uid: action.payload,
        isLogin: true
      };
    case "updateLoginState" :
      return {
        ...state,
        uid: action.payload,
        isLogin: false
      };
    default:
        return state;
    }
}

export default userIdReducer;
