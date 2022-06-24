const express = require('express');
const router = express.Router();
const path = require('path');
const allComments = [
    {MovieId:"My_Neighbor_Totoro", commentList: [], totalRate: 0},
    {MovieId:"The_Unbearable_Lightness_of_Being", commentList: [], totalRate: 0},
    {MovieId:"Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy", commentList: [], totalRate: 0}
];

/* GET users listing. */
router.get('/:movieId', function(req, res, next) {
    const foundMovieComment = allComments.find(movieComments => movieComments.MovieId === req.params.movieId);
    return res
        .setHeader('Content-Type', 'application/json')
        .send(foundMovieComment);
});

router.post('/', function (req, res, next) {
    const commentsContent = req.body.commentsContent;
    const foundMovieIndex = allComments.findIndex(movieComments => movieComments.MovieId === req.body.movieId);
    allComments[foundMovieIndex].commentList.push(commentsContent);
    allComments[foundMovieIndex].totalRate += commentsContent.rate;
    return res.send(allComments[foundMovieIndex]);
});

module.exports = router;
