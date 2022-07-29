const express = require('express');
const router = express.Router();
const Comment = require('./models/commentModel');



/* GET users listing. */
router.get('/:movieId', async function(req, res, next) {
    //const foundMovieComment = allComments.find(movieComments => movieComments.MovieId === req.params.movieId);
    let comments = {};
    const foundMovieComment = await Comment.findOne({"MovieId": req.params.movieId});
    //console.log(foundMovieComment);
    if(!foundMovieComment){
        await Comment.insertMany({
            MovieId: req.params.movieId,
            commentList: [],
            totalRate: 0,
            averageRate:0})
        comments = {
            MovieId: req.params.movieId,
            commentList: [],
            totalRate: 0,
            averageRate:0};
    } else {
        comments = foundMovieComment;
    }
    return res
        .setHeader('Content-Type', 'application/json')
        .send(comments);
});

router.post('/', async function (req, res, next) {
    let comments = await Comment.findOne({"MovieId": req.body.movieId});
    const commentsContent = req.body.commentsContent;
    comments.commentList.push(commentsContent);
    comments.totalRate += commentsContent.rate;
    comments.averageRate = Math.round(comments.totalRate * 2 /comments.commentList.length)/2
    await Comment.updateOne({MovieId: req.body.movieId},{$set:{commentList: comments.commentList, totalRate: comments.totalRate, averageRate: comments.averageRate}})
    return res.send(comments);
    // const foundMovieIndex = allComments.findIndex(movieComments => movieComments.MovieId === req.body.movieId);
    // allComments[foundMovieIndex].commentList.push(commentsContent);
    // allComments[foundMovieIndex].totalRate += commentsContent.rate;
    // return res.send(allComments[foundMovieIndex]);
});

router.delete('/',  async function (req, res, next) {
    let comments = await Comment.findOne({"MovieId": req.body.movieId});
    //recipes.splice(req.body.index, 1);
    comments.totalRate -= comments.commentList[req.body.index].rate;
    comments.averageRate = Math.round(comments.totalRate * 2 /comments.commentList.length)/2
    comments.commentList.splice(req.body.index, 1);
    await Comment.updateOne({MovieId: comments.MovieId},{$set:{commentList: comments.commentList, totalRate: comments.totalRate, averageRate: comments.averageRate}})
    return res.send(comments);
});

module.exports = router;
