var express = require('express');
var router = express.Router();
var path = require('path');

// let images = ["123"];

// router.get('/', function(req, res, next) {
//     res.send(images);
//   });

router.get('/My_Neighbor_Totoro', function (req, res, next) {
    var options = {
      root: path.join('./routes/images/')
    };
    var filename = "My_Neighbor_Totoro.png";
    return res.sendFile(filename, options);
  });

router.get('/The_Unbearable_Lightness_of_Being', function (req, res, next) {
    var options = {
      root: path.join('./routes/images/')
    };
    var filename = "The_Unbearable_Lightness_of_Being.png";
    return res.sendFile(filename, options);
  });

router.get('/Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy', function (req, res, next) {
    var options = {
      root: path.join('./routes/images/')
    };
    var filename = "Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy.png";
    return res.sendFile(filename, options);
  });

module.exports = router;
