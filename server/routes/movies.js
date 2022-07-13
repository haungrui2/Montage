var express = require('express');
var router = express.Router();
var path = require('path');
const mongoose = require('mongoose');
var generateMovieData = require('./generateData/movieData');
const movieQueries = require('./queries/movieQueries');
let movies = [];


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://montage2022:cpsc455montage@cluster0.d2rpjlf.mongodb.net/montage');
  // generateMovieData();
}

router.get('/', async function(req, res, next) {
  movies = await movieQueries.getAllMovies({});
  res.send(movies);
});

router.get('/:movieId', function (req, res, next) {
    const foundUser = movies.find(movie => movie.movieId === req.params.movieId);
    return res
      .setHeader('Content-Type', 'application/json')
      .send(foundUser);
});
  
  

module.exports = router;
