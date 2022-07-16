const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const allComments = [
    {MovieId:"My_Neighbor_Totoro", commentList: [], totalRate: 0},
    {MovieId:"The_Unbearable_Lightness_of_Being", commentList: [], totalRate: 0},
    {MovieId:"Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy", commentList: [], totalRate: 0},
    {MovieId:"Birdman", commentList: [], totalRate: 0},
    {MovieId:"Ghost_in_the_Shell", commentList: [], totalRate: 0},
    {MovieId:"Evangelion_3.0+1.01_Thrice_Upon_a_Time", commentList: [], totalRate: 0},
];
let comments = {};


const commentSchema = new mongoose.Schema({
    MovieId: String,
    commentList: Array,
    totalRate: Number
});

// create model
const Comment = mongoose.model('comment', commentSchema);

const uri = "mongodb+srv://montage2022:cpsc455montage@cluster0.d2rpjlf.mongodb.net/montage";

connectDb().catch(err => console.log(err));
async function connectDb() {
    await mongoose.connect(uri);
}
/* GET users listing. */
router.get('/:movieId', async function(req, res, next) {
    //const foundMovieComment = allComments.find(movieComments => movieComments.MovieId === req.params.movieId);
    const foundMovieComment = await Comment.findOne({"MovieId": req.params.movieId});
    console.log(foundMovieComment);
    if(!foundMovieComment){
        await Comment.insertMany({
            MovieId: req.params.movieId,
            commentList: [],
            totalRate: 0})
        comments = {
            MovieId: req.params.movieId,
            commentList: [],
            totalRate: 0};
    } else {
        comments = foundMovieComment;
    }
    return res
        .setHeader('Content-Type', 'application/json')
        .send(comments);
});

router.post('/', async function (req, res, next) {
    const commentsContent = req.body.commentsContent;
    comments.commentList.push(commentsContent);
    comments.totalRate += commentsContent.rate;
    await Comment.updateOne({MovieId: req.body.movieId},{$set:{commentList: comments.commentList, totalRate: comments.totalRate}})
    return res.send(comments);
    // const foundMovieIndex = allComments.findIndex(movieComments => movieComments.MovieId === req.body.movieId);
    // allComments[foundMovieIndex].commentList.push(commentsContent);
    // allComments[foundMovieIndex].totalRate += commentsContent.rate;
    // return res.send(allComments[foundMovieIndex]);
});

router.delete('/',  async function (req, res, next) {
    //recipes.splice(req.body.index, 1);
    comments.totalRate -= comments.commentList[req.body.index].rate;
    comments.commentList.splice(req.body.index, 1);
    await Comment.updateOne({MovieId: comments.MovieId},{$set:{commentList: comments.commentList, totalRate: comments.totalRate}})
    return res.send(comments);
});

module.exports = router;
