const Movie = require('../models/movieModel');

const queries = {
    getAllMovies: async function (filter) {
        const movies = await Movie.find(filter);
        return movies;
    },
    getOneMovie: async function (filter) {
        const movie = await Movie.findOne(filter);
        return movie;
    },
}

module.exports = queries;