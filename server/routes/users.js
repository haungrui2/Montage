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

  const userWithEmail = await userModel.find({email: email})
    .catch((error) => {
      console.log("Error :", error);
    });

  userModel.findOneAndUpdate({   // Verify the token is one of them and not deleted.
    email: adminEmail,
    isAdmin: false
  },
  {$set: {isAdmin: true}}).catch((error) => {
    console.log("Error: ", error);
  })

    if (!userWithEmail) {
      return res.status(400).json({message: "Email or Password does not match!"});
    }
    if (userWithEmail[0].password !== password) {
      return res.status(400).json({message: "Email or Password does not match!"});
    }
    const jwtToken = jwt.sign({id: userWithEmail[0]._id,
      email: userWithEmail[0].email}, process.env.JWT_SECRET);

    const userSession = new userSessionModel(); // correct user using userSession
    userSession.userId = userWithEmail[0]._id;
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
router.get(`/logout`, (req, res) => {
  const { query } = req;
  const { token } = query;
  userSessionModel.findOneAndUpdate({   // Verify the token is one of them and not deleted.
    _id: token,
    isDeleted: false
  },
  {$set: {isDeleted: true}}, null,
  (error, sessions) => {
    if (error) {
      console.log("error 2:", error);
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } return res.send({
        success: true,
        message: 'Verified token and successful logout'
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
  let recommendMovieId = '';
  const user =  await userModel.findOne({_id: req.body.userId});
  let preferenceGenreList = user.preferenceGenreList;
  let lastRecommendationDate = user.lastRecommendationDate;
  let lastRecommendationMovies = user.lastRecommendationMovies;
  let data = new Date();
  let UTCTime = {Year: data.getUTCFullYear(), Month: data.getUTCMonth(), Day: data.getUTCDate()};
  if (lastRecommendationDate.Year !== UTCTime.Year || lastRecommendationDate.Month !== UTCTime.Month
    || lastRecommendationDate.Day !== UTCTime.Day) {
      let recommendMovieList = [];
      let selectedGenre = '';
      if (preferenceGenreList.length === 0) {
        recommendMovieList = await Movie.find({});
        recommendMovieList.filter(movie => !lastRecommendationMovies.includes(movie));
        recommendMovieId = recommendMovieList[Math.floor(Math.random() * recommendMovieList.length)];
      } else {
        selectedGenre = preferenceGenreList[Math.floor(Math.random() * preferenceGenreList.length)];
        recommendMovieList = await Movie.find({MovieGenre: selectedGenre});
        recommendMovieList.filter(movie => !lastRecommendationMovies.has(movie));
        if (recommendMovieList.length !== 0) {
          recommendMovieId = recommendMovieList[Math.floor(Math.random() * recommendMovieList.length)];
        } else {
          recommendMovieList = await Movie.find({});
          recommendMovieList.filter(movie => !lastRecommendationMovies.has(movie));
          recommendMovieId = recommendMovieList[Math.floor(Math.random() * recommendMovieList.length)];
        }
      }
      lastRecommendationDate = UTCTime;
      if (lastRecommendationMovies.length === 7) {
        lastRecommendationMovies.splice(0,1);
      }
      lastRecommendationMovies.push(recommendMovieId);
  } else {
    recommendMovieId = lastRecommendationMovies[lastRecommendationMovies.length];
  }
  await userModel.updateOne({_id: req.body.userId}, {$set:{lastRecommendationDate: lastRecommendationDate,
    lastRecommendationMovies: lastRecommendationMovies}});
  return res.send(recommendMovieId);
});

module.exports = router;
