const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const YearMonthDay = new mongoose.Schema({
  Year: {
    type: Number,
    default: 0000
  },
  Month: {
    type: Number,
    default: 00
  },
  Day: {
    type: Number,
    default: 00
  }
});

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    required: true,
    default: ''
  },
  isLogin: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  favoriteMovies: {
    type: Array,
    default: []
  },
  preferenceGenreList: {
    type: Array,
    default: []
  },
  lastRecommendationDate: {
    type: YearMonthDay,
    default: {
      Year: 0000,
      Month: 00,
      Day: 00
    }
  },
  lastRecommendationMovies: {
    type: Array,
    default: []
  },
},
{
  collection: 'project_users_collection'
}
);


UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
