var express = require('express');
var router = express.Router();
var path = require('path');
const movies = [
    {MovieTitle:"My Neighbor Totoro", MovieYear:"1988", MovieDirector:"Hayao Miyazaki", 
    MovieWriter: "Hayao Miyazaki", MovieGenre: "Animation/Comedy/Family",
    MovieDescription: "The adventure story of two girls and forest spirits", src:"My_Neighbor_Totoro"},
    {MovieTitle:"The Unbearable Lightness of Being", MovieYear:"1988", MovieDirector:"Philip Kaufman", 
    MovieWriter: "Milan Kundera, Jean-Claude Carrière, Philip Kaufman", MovieGenre: "Drama/Romance",
    MovieDescription: "A lovely story between a Czech doctor who has active sex life and a woman who wants monogamy.", src:"The_Unbearable_Lightness_of_Being"},
    {MovieTitle:"Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkasu Academy", MovieYear:"2021", MovieDirector:"Wataru Takahashi", 
    MovieWriter: "Kimiko Ueno", MovieGenre: "Animation/Mystery",
    MovieDescription: "At the invitation of friends Toru Kazama, Nohara Shinnosuke and his friends came to the super elite school and encounter a big mystery.",
    src: "Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy"},
  ];

router.get('/', function(req, res, next) {
  res.send(movies);
});

router.get('/:movieSrc', function (req, res, next) {
    const foundUser = movies.find(movie => movie.src === req.params.movieSrc);
    return res
      .setHeader('Content-Type', 'application/json')
      .send(foundUser);
});
  
  

module.exports = router;
