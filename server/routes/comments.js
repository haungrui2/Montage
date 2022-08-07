const express = require('express');
const router = express.Router();
const Comment = require('./models/commentModel');

router.get('/:movieId', async function (req, res, next) {
    let comments = {};
    const foundMovieComment = await Comment.findOne({"MovieId": req.params.movieId});
    if (!foundMovieComment) {
        await Comment.insertMany({
            MovieId: req.params.movieId,
            commentList: [],
            totalRate: 0,
            averageRate: 0
        })
        comments = {
            MovieId: req.params.movieId,
            commentList: [],
            totalRate: 0,
            averageRate: 0
        };
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
    comments.averageRate = Math.round(comments.totalRate * 2 / comments.commentList.length) / 2
    await Comment.updateOne({MovieId: req.body.movieId}, {
        $set: {
            commentList: comments.commentList,
            totalRate: comments.totalRate,
            averageRate: comments.averageRate
        }
    })
    return res.send(comments);
});

router.delete('/', async function (req, res, next) {
    let comments = await Comment.findOne({"MovieId": req.body.movieId});
    comments.totalRate -= comments.commentList[req.body.index].rate;
    comments.commentList.splice(req.body.index, 1);
    comments.averageRate = comments.commentList.length ? Math.round(comments.totalRate * 2 / comments.commentList.length) / 2 : 0
    await Comment.updateOne({MovieId: comments.MovieId}, {
        $set: {
            commentList: comments.commentList,
            totalRate: comments.totalRate,
            averageRate: comments.averageRate
        }
    })
    return res.send(comments);
});

module.exports = router;
