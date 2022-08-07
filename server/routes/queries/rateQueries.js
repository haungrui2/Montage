const Comment = require('../models/commentModel');

const queries = {
    getRatedMovie: async function (query) {
        const rate = query.MovieRate
        let foundComments = await Comment.find({averageRate: {$gte: rate}}, {"MovieId.$": 1});
        let foundMovies = []
        foundComments.map((comment) => {
            foundMovies.push(comment.MovieId);
        })
        return foundMovies;
    }
}

module.exports = queries;