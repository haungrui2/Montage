var express = require('express');
var router = express.Router();
var path = require('path');
const movieImageQueries = require('./queries/movieImageQueries');

let images = [];
let image = '';

router.get('/', async function(req, res, next) {
  images = await movieImageQueries.getAllImages({});
  res.send(images);
});

router.get('/:movieId', async function (req, res, next) {
  image = await movieImageQueries.getOneImage({movieId: req.params.movieId})
  return res
    .setHeader('Content-Type', 'application/json')
    .send(image.imageData);
});


module.exports = router;
