const mongoose = require("mongoose");

const UserSessionSchema = new mongoose.Schema({
  token: {
    type: String,
    default: ''
  },
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isLogin: {
    type: Boolean,
    default: false,
  },
},
{
  collection: 'project_users_Session'
}
);

const UserSession = mongoose.model("UserSession", UserSessionSchema);

module.exports = UserSession;
