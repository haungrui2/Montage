const Comment = require('../models/commentModel');

const queries = {
    getRatedMovie: async function (query) {
        const rate = query.MovieRate
        let foundComments = await Comment.find({ averageRate: { $gte: rate } }, {"MovieId.$": 1});
        //console.log("foundComments: " + foundComments)
        let foundMovies = []
        foundComments.map((comment)=>{
            foundMovies.push(comment.MovieId);
        })
        //console.log("foundMovies: " + foundMovies)
        return foundMovies;
    }
}

module.exports = queries;