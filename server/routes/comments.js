const express = require('express');
const router = express.Router();
const path = require('path');
const allComments = [
    {MovieTitle:"My_Neighbor_Totoro", commentList: []},
    {MovieTitle:"The Unbearable Lightness of Being", commentList: []},
    {MovieTitle:"Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkasu Academy", commentList: []}
];

/* GET users listing. */
router.get('/:movieTitle', function(req, res, next) {
    const foundMovieComment = allComments.find(movieComments => movieComments.MovieTitle === req.params.movieTitle);
    return res
        .setHeader('Content-Type', 'application/json')
        .send(foundMovieComment);
});

router.post('/', function (req, res, next) {
    const commentsContent = req.body.commentsContent;
    const foundMovieIndex = allComments.findIndex(movieComments => movieComments.MovieTitle === req.body.movieTitle);
    allComments[foundMovieIndex].commentList.push(commentsContent);
    return res.send(allComments[foundMovieIndex]);
});

module.exports = router;
