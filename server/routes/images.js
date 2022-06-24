var express = require('express');
var router = express.Router();
var path = require('path');

let images = [
    {MovieTitle:"My Neighbor Totoro", src:"My_Neighbor_Totoro"},
    {MovieTitle:"The Unbearable Lightness of Being", src:"The_Unbearable_Lightness_of_Being"},
    {MovieTitle:"Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkasu Academy", src:"Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy"},
];

router.get('/:movieSrc', function (req, res, next) {
    const foundSrc = images.find(image => image.src === req.params.movieSrc);
    var options = {
        root: path.join('./routes/images/')
      };
      var filename = foundSrc.src + '.png';
    return res
      .setHeader('Content-Type', 'image/png')
      .sendFile(filename, options);
});


module.exports = router;
