var express = require('express');
var router = express.Router();
var path = require('path');
const mongoose = require('mongoose');
var generateMovieData = require('./generateData/movieData');
const movieQueries = require('./queries/movieQueries');
let movies = [];
let addedMovie = [];

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://montage2022:cpsc455montage@cluster0.d2rpjlf.mongodb.net/montage');
  // generateMovieData();
}

router.get('/', async function(req, res, next) {
  await movieQueries.getAllMovies({}).then((result) => {
    movies = result;
    res.send(movies);
  });
});

router.get('/:movieId', function (req, res, next) {
    const foundUser = movies.find(movie => movie.movieId === req.params.movieId);
    return res
      .setHeader('Content-Type', 'application/json')
      .send(foundUser);
});

router.post('/', async function(req, res, next) {
  await movieQueries.insertOneMovie(req.body).then((added) => {
    movies.push(added[0]);
    // console.log(movies)
    return res.send(movies);
});
});
  
  

module.exports = router;
