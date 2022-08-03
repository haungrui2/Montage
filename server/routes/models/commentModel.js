const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    MovieId: String,
    commentList: Array,
    totalRate: Number,
    averageRate: Number
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;