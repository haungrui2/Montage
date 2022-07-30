const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel");
const userSessionModel = require('../models/userSession');
const Movie = require('./models/movieModel');
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.get(`/:id`, async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//SUBMIT A User info -- Sign Up
router.post(`/signup`, (req, res) => {
  const {fullName, password} = req.body;
  let {email} = req.body;

  if (!fullName) {
    return res.send({
      success: false,
      message: 'Error: Name cannot be blank.'
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  //Verify email
  userModel.find({
    email: email
  }, (error, previousUsers) => {
    if (error) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.status(409).json({message: "User with email already exists!"});
    }

    // Save the new User info -- using userModel
    const newUser = new userModel();
    newUser.fullName = fullName;
    newUser.email = email;
    newUser.password = password;
    const savedUser = newUser.save()
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({error:"Cannot register user at the moment!"});
    });
    if (savedUser) {
      res.json({message: "Thanks for registering!"});
    }
  });
});

// Sign In
router.post(`/signin`, async (req, res) => {
  const {password} = req.body;
  let {email} = req.body;

  email = email.toLowerCase();
  const adminEmail = "montageadmin@gmail.com";

  const userWithEmail = await userModel.findOneAndUpdate({
    email: email,
    isLogin: false
  }, {$set: {isLogin: true}}).catch((error) => {
      console.log("Error :", error);
    });

  if (!userWithEmail) {
    return res.status(400).json({message: "Email or Password does not match!"});
  }
  if (userWithEmail.email == adminEmail) {
    userModel.findOneAndUpdate({
      email: adminEmail,
      isAdmin: false
    },
    {$set: {isAdmin: true}}).catch((error) => {
      console.log("Error: ", error);
    });
  }
  if (userWithEmail.password !== password) {
    return res.status(400).json({message: "Email or Password does not match!"});
  }
  const jwtToken = jwt.sign({id: userWithEmail._id,
    email: userWithEmail.email}, process.env.JWT_SECRET);

  const userSession = new userSessionModel(); // correct user using userSession
  userSession.userId = userWithEmail._id;
  userSession.token = jwtToken;
  userSession.save((error, doc) => {
    if (error) {
      console.log(error);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } return res.send({
      success: true,
      message: 'Valid Sign In',
      token: jwtToken
    });
  });
});

// Get the token for easy login
router.get(`/verify/:token`, (req, res) => {
  try {
    const userSession = userSessionModel.findOne({   // Verify the token is one of them and not deleted.
      token: req.params.token
    });
    res.send({
      success: true,
      message: "User Verified!"
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Logout, if success logout, set isDeleted to true
router.get(`/logout/:userId`, (req, res) => {
  userModel.findOneAndUpdate({   // Verify the token is one of them and not deleted.
    _id: req.params.userId,
    isLogin: true
  },
  {$set: {isLogin: false}}, null,
  (error, user) => {
    if (error) {
      console.log("error 2:", error);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } return res.send({
        success: true,
        message: 'Successful logout'
      });
  });
});


router.patch('/editFavouriteMovies', async function (req, res, next) {
  const user =  await userModel.findOne({_id: req.body.userId});
  let movie = await Movie.findOne({_id: req.body.movieId});
  let movieGenreList = movie.MovieGenre;
  let favouriteList = user.favoriteMovies;
  let preferenceGenreList = user.preferenceGenreList;
  if (user.favoriteMovies.includes(req.body.movieId)) {
    let index = favouriteList.indexOf(req.body.movieId);
    favouriteList.splice(index, 1);
    movieGenreList.map((genre) =>
    preferenceGenreList.splice(preferenceGenreList.indexOf(genre), 1));
  } else {
    favouriteList.push(req.body.movieId);
    movieGenreList.map((genre) => preferenceGenreList.push(genre));
  }
  await userModel.updateOne({_id: req.body.userId}, {$set:{favoriteMovies: favouriteList,
    preferenceGenreList: preferenceGenreList}});
  return res.send();
});

router.patch('/recommend', async function (req, res, next) {
  const istheSameId = (a, b) => a._id.toString() === b._id.toString();
  const filterNotInLater = (x, y, compareFunction) =>
  x.filter(xValue =>
    !y.some(yValue =>
      compareFunction(xValue, yValue)));
  let recommendMovieId = '';
  let user =  await userModel.findOne({_id: req.body.userId});
  let preferenceGenreList = user.preferenceGenreList;
  let favouriteList = user.favoriteMovies;
  let lastRecommendationDate = user.lastRecommendationDate;
  let lastRecommendationData = await userModel.findOne({_id: req.body.userId}, "lastRecommendationMovies");
  let lastRecommendationMovies = lastRecommendationData.lastRecommendationMovies;
  let data = new Date();
  let UTCTime = {Year: data.getUTCFullYear(), Month: data.getUTCMonth(), Day: data.getUTCDate()};
  if (lastRecommendationDate.Year !== UTCTime.Year || lastRecommendationDate.Month !== UTCTime.Month
    || lastRecommendationDate.Day !== UTCTime.Day) {
      let recommendMovieList = [];
      let selectedGenre = '';
      if (preferenceGenreList.length === 0) {
        //recommendMovieList = await Movie.find({}, "_id");
        //recommendMovieList = filterNotInLater(recommendMovieList, lastRecommendationMovies, istheSameId);
        recommendMovieList = await Movie.find( {_id: {$nin: lastRecommendationMovies}}, "_id");
        recommendMovieId = recommendMovieList[Math.floor(Math.random() * recommendMovieList.length)];
      } else {
        selectedGenre = preferenceGenreList[Math.floor(Math.random() * preferenceGenreList.length)];
        recommendMovieList = await Movie.find( {$and: [{MovieGenre: selectedGenre, _id: {$nin: favouriteList}}, {_id: {$nin: lastRecommendationMovies}}]}, "_id");
        //recommendMovieList = filterNotInLater(recommendMovieList, lastRecommendationMovies, istheSameId);
        if (recommendMovieList.length !== 0) {
          recommendMovieId = recommendMovieList[Math.floor(Math.random() * recommendMovieList.length)];
        } else {
          //recommendMovieList = await Movie.find({}, "_id");
          //recommendMovieList = filterNotInLater(recommendMovieList, lastRecommendationMovies, istheSameId);
          recommendMovieList = await Movie.find( {$and: [{_id: {$nin: favouriteList}}, {_id: {$nin: lastRecommendationMovies}}]}, "_id");
          recommendMovieId = recommendMovieList[Math.floor(Math.random() * recommendMovieList.length)];
        }
      }
      lastRecommendationDate = UTCTime;
      if (lastRecommendationMovies.length === 7) {
        lastRecommendationMovies.splice(0,1);
      }
      lastRecommendationMovies.push(recommendMovieId);
  } else {
    recommendMovieId =  lastRecommendationMovies[lastRecommendationMovies.length-1]
  }
  await userModel.updateOne({_id: req.body.userId}, {$set:{lastRecommendationDate: lastRecommendationDate,
    lastRecommendationMovies: lastRecommendationMovies}});
    let result = await Movie.find({_id: recommendMovieId._id.toString()});
    return res.send(result[0]);
});


module.exports = router;
