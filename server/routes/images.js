var express = require('express');
var router = express.Router();
var path = require('path');

let images = [
    {MovieTitle:"My Neighbor Totoro", movieId:"My_Neighbor_Totoro"},
    {MovieTitle:"The Unbearable Lightness of Being", movieId:"The_Unbearable_Lightness_of_Being"},
    {MovieTitle:"Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkasu Academy", movieId:"Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy"},
];

router.get('/:movieId', function (req, res, next) {
    const found = images.find(image => image.movieId === req.params.movieId);
    var options = {
        root: path.join('./routes/images/')
      };
      var filename = found.movieId + '.png';
    return res
      .setHeader('Content-Type', 'image/png')
      .sendFile(filename, options);
});


module.exports = router;
