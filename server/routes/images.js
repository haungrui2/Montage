var express = require('express');
var router = express.Router();
var path = require('path');

let images = [
    {MovieTitle:"My Neighbor Totoro", movieId:"My_Neighbor_Totoro"},
    {MovieTitle:"The Unbearable Lightness of Being", movieId:"The_Unbearable_Lightness_of_Being"},
    {MovieTitle:"Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkasu Academy", movieId:"Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy"},
    {MovieTitle:"Birdman", movieId:"Birdman"},
    {MovieTitle:"Ghost in the Shell", movieId: "Ghost_in_the_Shell"},
    {MovieTitle:"Evangelion: 3.0+1.01 Thrice Upon a Time", movieId: "Evangelion_3.0+1.01_Thrice_Upon_a_Time"},
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
