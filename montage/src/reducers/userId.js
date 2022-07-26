let userId = {
  id: ""
}

const userIdReducer = (state=userId, action) => {
  switch(action.type) {
    case "getUserId" :
      return {
        id: action.payload.id
      }
  }
}
