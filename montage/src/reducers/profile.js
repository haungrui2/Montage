let profileData = {
  data: ""
}

const profile = ( state=profileData, action ) => {
  switch(action.type) {
    case "getUserData" :
      return {
        data: action.payload
      }
  }
}
