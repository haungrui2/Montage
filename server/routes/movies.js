var express = require('express');
var router = express.Router();
var path = require('path');
const movies = [
    {MovieTitle:"となりのトトロ", MovieYear:"1988", MovieDirector:"Hayao Miyazaki", 
    MovieWriter: "Hayao Miyazaki", MovieGenre: "Animation/Comedy/Family", MovieRating: "10",
    MovieDescription: "The adventure story of two girls and forest spirits", src: "poster.png"},
    {MovieTitle:"The Unbearable Lightness of Being", MovieYear:"1988", MovieDirector:"Philip Kaufman", 
    MovieWriter: "Milan Kundera, Jean-Claude Carrière, Philip Kaufman", MovieGenre: "Drama/Romance", MovieRating: "7",
    MovieDescription: "A lovely story between a Czech doctor who has active sex life and a woman who wants monogamy.",
    src: "poster2.png"},
  ];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(movies);
});

router.get('/images', function (req, res, next) {
    var options = {
      root: path.join('./routes/images/')
    };
    var filename = movies[0].src;
    return res.sendFile(filename, options);
  });

module.exports = router;
